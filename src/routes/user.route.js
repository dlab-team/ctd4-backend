const express = require('express')
const { userController } = require('../controllers')
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()

router.route('/').get(checkAuth, userController.getUserInfo)
router.route('/update').put(checkAuth, userController.updateUser)

module.exports = router
