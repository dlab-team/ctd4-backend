const { Users } = require('../models')
const { comparePassword } = require('../utils/password.util')
const { createToken } = require('../utils/token.util')

const findUser = async ({ email, password }) => {
  try {
    if (!(email && password)) {
      return {
        success: false,
        message: 'All input is required'
      }
    }

    const user = await Users.findOne({ where: { email: email } })

    if (user && (await comparePassword(password, user.password))) {
      return {
        success: true,
        email: user.email,
        password: user.password
      }
    }

    return {
      success: false,
      message: 'Invalid Credentials'
    }
  } catch (error) {
    throw Error(error)
  }
}

const generateTokenResponse = async (email, password) => {
  const token = createToken({ email: email }, 7200)
  return token
}

module.exports = { findUser, generateTokenResponse }
