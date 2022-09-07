const express = require('express')
// const { routes } = require("../..");
const router = express.Router()
const path = require('path')
const loginRoutes = require('./login')
const defaultRoutes = [
  {
    path: '/login',
    route: loginRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
