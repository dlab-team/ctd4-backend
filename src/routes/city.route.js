const express = require('express')
const { cityController } = require('../controllers/')

const router = express.Router()

router.get('/', cityController.getCities)
module.exports = router
