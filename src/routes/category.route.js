const express = require('express')

const router = express.Router()
const { categoryController } = require('../controllers/')

router.get('/', categoryController.getCategories)
router.post('/', categoryController.postCategories)
router.put('/:id', categoryController.postCategories)

// router.put('/:id', categoryController.updateCategory)

// Get enum Values

module.exports = router
