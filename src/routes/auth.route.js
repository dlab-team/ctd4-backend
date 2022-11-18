const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')
const google = require('../middlewares/google')

router.post('/login', authController.userAuth)
router.post('/signup', authController.userSignup)
router.post('/logout', authController.userLogout)
router.post('/auth-google', [google], authController.authGoogle)

module.exports = router
