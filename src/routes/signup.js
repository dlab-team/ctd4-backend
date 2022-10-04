const express = require("express");
const router = express.Router();
const { signupController } = require('../controllers/')

router.post('/', signupController.userSignup)

module.exports = router;