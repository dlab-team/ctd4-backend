const express = require('express')
const { cityController } = require('../controllers/')

const router = express.Router()

router.get('/', cityController.getCities)
router.post('/', cityController.postCities)
router.put('/:id', cityController.updateCities)

// Get enum Values

module.exports = router
