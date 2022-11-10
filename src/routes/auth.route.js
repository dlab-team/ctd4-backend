const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')

router.post('/login', authController.userAuth)
router.post('/signup', authController.userSignup)
router.post('/logout', authController.userLogout)
router.post("/recovery-password", authController.recoveryPassword);
router.route("/new-password/:token")
    .get(authController.verifyPassword)
    .post(authController.createPassword)
module.exports = router
