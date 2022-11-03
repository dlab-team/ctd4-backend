const express = require('express')
const router = express.Router()

const authRoutes = require('./auth.route')
const workprofileRoutes = require('./workprofile.route')
const cityRoutes = require('./city.route')
const categoryRoutes = require('./category.route')
const chargeRoutes = require('./charge.route')

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
    path: '/user-profile',//TODO: este deberia ser solo user 
    route: userRoutes
  },
  {

    path: '/cities',
    route: cityRoutes
  },
  {
    path: '/categories',
    route: categoryRoutes
  },
  {
    path: '/charges',
    route: chargeRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

module.exports = router
