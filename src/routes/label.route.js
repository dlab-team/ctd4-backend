const express = require('express')

const router = express.Router()

const { labelController } = require('../controllers/')

router.get('/', labelController.getLabel)
router.post('/', labelController.postLabel)
router.delete('/:id', labelController.deleteLabel)

module.exports = router
