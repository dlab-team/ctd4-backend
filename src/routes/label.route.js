const express = require("express")

const router = express.Router()

const { labelController } = require ('../controllers/')

router.get('/', labelController.getLabel)
router.post('/', labelController.postLabel)
//router.delete('/', labelController.deleteLabel)

module.exports = router