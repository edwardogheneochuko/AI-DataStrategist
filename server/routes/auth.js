const express = require('express');
const { register, login, protect, forgot } = require('../controller/auth.controller');
const verifyToken = require('../middleware/authMiddleware');

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// 🔐 Register route
router.post('/register', register);

// 🔐 Login route
router.post('/login', login)

// 🔐 Forgot Password route

router.post('/forgot-password', forgot)

// 🔐 Protected route
router.get('/protected', verifyToken, protect);

module.exports = router;
