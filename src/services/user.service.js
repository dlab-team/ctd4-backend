const { Users } = require('../models')
const { comparePassword, passwordHashing } = require('../utils/password.util')
const { createToken } = require('../utils/token.util')

const findUser = async ({ email, password }) => {
  try {
    // Validate user input
    if (!(email && password)) {
      return {
        status: 400,
        success: false,
        message: 'All input is required'
      }
    }

    const user = await Users.findOne({ where: { email: email } })

    const passwordHashed = await passwordHashing(password)

    if (user && (await comparePassword(passwordHashed, user.password))) {
      // user
      return {
        status: 200,
        success: true,
        email: user.email,
        password: user.password
      }
    }

    return {
      status: 400,
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

const findOrCreate = async (email, password) => {
  // TODO: evaluar si el usuario existe para no crearlo denuevo
  // TODO: incorporar httpStatus en los mensajes
  const passwordHashed = await passwordHashing(password)

  const newUser = await Users.create({ email, password: passwordHashed })
  return newUser
}

module.exports = { findUser, generateTokenResponse, findOrCreate }
