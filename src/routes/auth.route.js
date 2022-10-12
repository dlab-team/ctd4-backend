const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')

router.post('/login', authController.userAuth)
router.post('/signup', authController.userSignup)
router.post('/logout', authController.userLogout)

module.exports = router
