const express = require('express')
const router = express.Router()

const authRoutes = require('./auth.route')
const skillRoutes = require('./skill.route')
const countryRoutes = require('./country.route')
const cityRoutes = require('./city.route')
const categoryRoutes = require('./category.route')
const chargeRoutes = require('./charge.route')
const quizzRoutes = require('./quiz.route')
const labelRoutes = require('./label.route')

const userRoutes = require('./user.route')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger/swagger.json')

const defaultRoutes = [
  {
    path: '/',
    route: authRoutes
  },
  {
    path: '/skills',
    route: skillRoutes
  },
  {
    path: '/countries',
    route: countryRoutes
  },
  {
    path: '/user',
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
  },
  {
    path: '/quizzes',
    route: quizzRoutes
  },
  {
    path: '/labels',
    route: labelRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

module.exports = router
