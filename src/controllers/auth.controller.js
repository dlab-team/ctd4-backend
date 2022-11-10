const { userService } = require('../services')
const httpStatus = require('http-status')
const { User } = require('../models')
const { passwordHashing } = require('../utils/password.util')
const { emailForgotPassword } = require('../utils/emails.util')
const { createToken, decodeToken } = require('../utils/token.util')


const userAuth = async (req, res, next) => {
  try {
    const { email, password, success } = await userService.findUser(req.body)

    if (!success) {
      res.status(httpStatus.UNAUTHORIZED)
      return res.json({ message: 'Invalid Credentials' })
    }

    const token = await userService.generateTokenResponse(email, password)

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
const recoveryPassword = async (req, res) => {

  try {
    const { email } = req.body

    const user = await userService.getUserByEmail(email)

    if (!user) {
      const error = new Error('User not found!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }
    const expiresIn = 60 * 60;

    user.token = createToken({ id: user._id, email: user.email }, expiresIn);

    await userService.saveUser(user)

    // send email
    const { email: _email, name, token } = user;

    emailForgotPassword({ _email, name, token })
    console.log(_email)

    res.status(httpStatus.OK).json({ msg: "Se ha enviado un correo electrónico de confirmación a su correo electrónico." });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}
const verifyPassword = async (req, res) => {
  try {
    const { token } = req.params
    const email = decodeToken(token)
    const user = await userService.getUserByEmail(email)

    if (!token) {
      const error = new Error('No tienes los permisos necesarios')
      res.status(httpStatus.FORBIDDEN).json({ msg: '', errors: error.message });
    }
    if (!user) {
      const error = new Error('Usuario no Encontrado!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }

    res.status(httpStatus.OK).json({ msg: "la contraseña ha sido verificada" });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}
const createPassword = async (req, res) => {
  try {
    const { token } = req.params
    const { password } = req.body
    const email = decodeToken(token)
    const user = await userService.getUserByEmail(email)

    if (!token) {
      const error = new Error('No tienes los permisos necesarios')
      res.status(httpStatus.FORBIDDEN).json({ msg: '', errors: error.message });
    }
    if (!user) {
      const error = new Error('Usuario no Encontrado!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }
    // TODO: define or not a new password validation method
    user.password = password;
    user.token = null;

    await userService.saveUser(user)

    res.status(httpStatus.OK).json({ msg: "Se ha creado una nueva contraseña con éxito", data: user });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

module.exports = { userAuth, userSignup, userLogout, recoveryPassword, createPassword, verifyPassword }
