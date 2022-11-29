const authController = require('./auth.controller')
const workprofileController = require('./workprofile.controller')
const skillController = require('./skill.controller')
const countryController = require('./country.controller')
const cityController = require('./city.controller')
const categoryController = require('./category.controller')
const userController = require('./user.controller')
const chargeController = require('./charge.controller')
const quizController = require('./quiz.controller')

module.exports = {
  authController,
  workprofileController,
  cityController,
  categoryController,
  userController,
  chargeController,
  skillController,
  countryController,
  quizController
}
