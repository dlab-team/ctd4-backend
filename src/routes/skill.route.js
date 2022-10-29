const express = require('express');
const router =  express.Router();

const {skillController} =  require('../controllers');


router.get('/skill', skillController.getSkillInfo);

module.exports = router;
