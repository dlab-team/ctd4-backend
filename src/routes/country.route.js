const express = require('express')
const router = express.Router()

const {countryController} = require("../controllers")

router.get('/', countryController.getCountries)

module.exports = router
