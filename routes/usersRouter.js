const express = require('express')
const router = express.Router()
const { registerUser } = require('../controller/userauth')
const { loginUser } = require('../controller/userauth')
const { logout } = require('../controller/userauth')

router.post('/register',registerUser)

router.post('/login', loginUser)

router.get('/logout',logout)

module.exports = router