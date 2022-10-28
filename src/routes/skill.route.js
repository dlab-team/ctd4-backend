const express = require('express')
const router = express.Router()

const {skillController} = require("../controllers")

router.get('/', skillController.getSkills)

module.exports = router
