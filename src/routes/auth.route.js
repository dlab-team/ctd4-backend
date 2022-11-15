const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')
const validate = require('../middlewares/validate')
const { validateSignUp, validateToken } = require('../validators/auth.validator')

router.post('/login', authController.userAuth)
router.post('/signup', [validateSignUp, validate], authController.userSignup)
router.post('/logout', authController.userLogout)
router.post("/recovery-password", authController.recoveryPassword);
router.route("/new-password/:token")
    .get([validateToken, validate], authController.verifyPassword)
    .post([validateToken, validate], authController.createPassword)
module.exports = router
