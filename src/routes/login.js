const express = require("express");
const router = express.Router();
const controller = require('../controllers')

router.post('/', controller.userAuth)

module.exports = router;