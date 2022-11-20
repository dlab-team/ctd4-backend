
const service = require('../services')
const httpStatus = require('http-status')
const { User } = require('../models')
const { passwordHashing } = require('../utils/password.util')

const userService = service.userService

const userAuth = async (req, res, next) => {
  try {
    const { email, password, success } = await userService.findUser(req.body)

    if (!success) {
      res.status(httpStatus.UNAUTHORIZED)
      return res.json({ message: 'Invalid Credentials' })
    }

    const token = await userService.generateTokenResponse(email)

    return res.status(httpStatus.OK).json({
      message: 'Auth de usuario',
      token
    })
  } catch (error) {
    return next(error)
  }
}

const userSignup = async (req, res, next) => {
  try {
    const { email, name, password, re_password } = req.body

    // Validacion campos vacios
    if (!email || !password || !re_password) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'Algunos campos estan vacios' })
    }

    // Validacion contraseñas desiguales
    if (password != re_password) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'Contraseñas desiguales' })
    }

    // Validacion requisitos contraseña
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    if (regex.test(password) === false) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'La contraseña no cumple con los requisitos' })
    }

    //Validación dentro de la base de datos
    const existingUser = await User.findOne({ where: { email: email } })
    if (existingUser) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'Este correo ya se encuentra registrado' })
    }

    // Encriptacion de la contraseña
    const passwordHash = await passwordHashing(password)
    const user = await new User({ email, name, password: passwordHash })
    await user.save()
    return res.status(httpStatus.OK).json({
      message: 'Usuario autenticado exitosamente',
      user: { email }
    })
  } catch (error) {
    return next(error)
  }
}

const userLogout = (req, res) => {
  try {
    localStorage.removeItem('token')
    res.status(httpStatus.OK).json({ success: true, message: 'Logout Success' })
  } catch (error) {
    throw Error(error)
  }
}
const authGoogle = async (req, res) => {
  try {
    console.log('USER-FROM GOOGLE: ', req.user)
    const { name, emails, photos } = req.user
    const email = emails[0].value
    const nameUser = name.givenName
    const existingUser = await userService.getUserByEmail(email);
    let userData = {};
    if (!existingUser) {
      const user = new User({
        email,
        name: nameUser
      })
      userData = await userService.saveUser(user)
    } else {
      userData = existingUser;
    }
    const token = await userService.generateTokenResponse(userData.email)
    return res.status(httpStatus.OK).json({
      message: 'Auth de usuario',
      token,

    })

  } catch (error) {
    throw Error(error)
  }



}

module.exports = { userAuth, userSignup, userLogout, authGoogle }
