import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import PeopleModel from './models/People.js'


const app = express()

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/people')


// REGISTER
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await PeopleModel.create({ name, email, password: hashedPassword })
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// LOGIN
app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await PeopleModel.findOne({ email })
        if (!user) {
            return res.json({ Login: false, Message: 'No record found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ Login: false, Message: 'Invalid credentials' })
        }

        const accessToken = jwt.sign({ email }, 'jwt-access-token-secret-key', { expiresIn: '1m' })
        const refreshToken = jwt.sign({ email }, 'jwt-refresh-token-secret-key', { expiresIn: '5m' })

        res.cookie('accessToken', accessToken, { maxAge: 60 * 1000 })
        res.cookie('refreshToken', refreshToken, {
            maxAge: 5 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        })

        res.json({ Login: true })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Middleware to verify access token
const verifyUser = (req, res, next) => {
    const accessToken = req.cookies.accessToken
    if (!accessToken) {
        return renewToken(req, res, next)
    }

    jwt.verify(accessToken, 'jwt-access-token-secret-key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ valid: false, message: 'Invalid access token' })
        }
        req.email = decoded.email
        next()
    })
}

// Token renewal middleware
const renewToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) {
        return res.status(401).json({ valid: false, message: 'No refresh token provided' })
    }

    jwt.verify(refreshToken, 'jwt-refresh-token-secret-key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ valid: false, message: 'Invalid refresh token' })
        }

        const newAccessToken = jwt.sign(
            { email: decoded.email },
            'jwt-access-token-secret-key',
            { expiresIn: '1m' }
        )

        res.cookie('accessToken', newAccessToken, { maxAge: 60 * 1000 })
        req.email = decoded.email
        next()
    })
}

// Protected route
app.get('/dashboard', verifyUser, (req, res) => {
    res.json({ valid: true, message: 'Authorized', email: req.email })
})

// Start server
app.listen(3001, () => {
    console.log('Server is running on port 3001')
})
