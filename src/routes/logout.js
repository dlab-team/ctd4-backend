const express = require("express");
const router = express.Router();
const { logoutController } = require('../controllers/')

router.post('/', logoutController.logout)

module.exports = router;