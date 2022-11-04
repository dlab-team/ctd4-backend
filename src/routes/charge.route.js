
const express = require("express")

const router = express.Router()

const { chargeController } = require('../controllers/')

//revisar getCharge hay un error
router.get('/', chargeController.getCharges)

module.exports = router