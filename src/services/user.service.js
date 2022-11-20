const { User, City, Country, EducationalProfile } = require('../models')
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

    const user = await User.findOne({ where: { email: email } })

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
getUserByEmail = async (email) => {
  try {
    const userFound = await User.findOne({ where: { email } })
    return userFound
  } catch (error) {
    throw Error(error)

  }
}
getUserById = async (id) => {
  try {
    const userFound = await User.findOne({
      where: { id },
      include: { model: City, include: { model: Country } },

    });

    return userFound;
  } catch (error) {
    throw Error(error)

  }
}
const saveUser = async (user) => {
  try {
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    throw Error(error)

  }
}


const generateTokenResponse = async (email) => {
  const token = createToken({ email: email }, 7200)
  return token
}
const getEducationalProfilesByIdUser = async (userId) => {
  try {
    const profile = await EducationalProfile.findOne({ where: userId, attributes: { exclude: ['createdAt', 'updatedAt'] } })
    return profile
  } catch (error) {
    throw Error(error)
  }
}

module.exports = { findUser, generateTokenResponse, getUserByEmail, getUserById, saveUser, getEducationalProfilesByIdUser }
