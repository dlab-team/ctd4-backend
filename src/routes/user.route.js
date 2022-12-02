const express = require('express')
const { userController } = require('../controllers')
const validate = require('../middlewares/validate')
const { validateUser } = require('../validators/user.validator')
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()


router.route("/")
    .get(checkAuth, userController.getUserInfo)
router.route("/:userId")
    .put([checkAuth, validateUser, validate], userController.updateUser)
router.route('/:userId/educational')
    .get(checkAuth, userController.getEducationalProfiles)



module.exports = router
