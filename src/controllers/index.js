const authController = require('./auth.controller')
const skillController = require('./skill.controller')
const countryController = require('./country.controller')
const cityController = require('./city.controller')
const categoryController = require('./category.controller')
const userController = require('./user.controller')
const chargeController = require('./charge.controller')
const quizController = require('./quiz.controller')

const labelController = require('./label.controller')

module.exports = {
  authController,
  cityController,
  categoryController,
  userController,
  chargeController,
  skillController,
  countryController,
  quizController,
  labelController
}
