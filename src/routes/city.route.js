const express = require('express')
const { cityController } = require('../controllers/')

const router = express.Router()

router.post('/', cityController.createCity)
router.put('/:id', cityController.updateCity)

// Get enum Values

module.exports = router
