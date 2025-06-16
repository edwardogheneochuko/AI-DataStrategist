
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json()) 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err))

app.use('/', authRoutes) 

const PORT = process.env.PORT  
app.listen(PORT, () => console.log(`Server running on ${PORT}`)) 
