const express = require("express");
const router = express.Router();
const { loginController } = require('../controllers/')

router.post('/', loginController.userAuth)

module.exports = router;