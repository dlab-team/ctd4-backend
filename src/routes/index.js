const express = require('express')
const router = express.Router()

const authRoutes = require('./auth.route')
const workprofileRoutes = require('./workprofile.route')
const userRoutes = require('./user.route')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger/swagger.json')

const defaultRoutes = [
  {
    path: '/',
    route: authRoutes
  },
  {
    path: '/work-profiles',
    route: workprofileRoutes
  },
  {
    path: '/user-profile',
    route: userRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

module.exports = router
