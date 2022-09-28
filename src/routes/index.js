const express = require('express')
// const { routes } = require("../..");
const router = express.Router()
const path = require('path')
const loginRoutes = require('./login')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');


const defaultRoutes = [
  {
    path: '/login',
    route: loginRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router


 

