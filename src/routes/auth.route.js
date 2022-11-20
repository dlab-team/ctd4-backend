const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')
const passport = require('passport');

router.post('/login', authController.userAuth)
router.post('/signup', authController.userSignup)
router.post('/logout', authController.userLogout)
// router.post('/auth-google', [google], authController.authGoogle)
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))
router.get('/google/callback', passport.authenticate('google'), authController.authGoogle);


module.exports = router
