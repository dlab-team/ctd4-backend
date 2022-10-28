const express = require('express')
const { userController } = require("../controllers");
const checkAuth = require('../middlewares/checkAuth');
const router = express.Router()

router.route("/")
    .get(checkAuth, userController.getUserInfo)//! 'getUsers' if list users
    .post(checkAuth, userController.saveUser);
router.route("/:id")
    .put(checkAuth, userController.updateUser)


module.exports = router

