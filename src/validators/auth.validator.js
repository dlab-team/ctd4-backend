const { body, param } = require('express-validator');
const { userService } = require("../services");
const { decodeToken } = require('../utils/token.util');

module.exports = {
  validateSignUp: [
    body('name').exists().notEmpty().withMessage('Debe Ingresar un Nombre'),
    body('lastname').exists().notEmpty().withMessage('Debe Ingresar un Apellido'),
    body('password')
      .exists()
      .isLength({ min: 8 })
      .withMessage('la contraseña debe tener mas de 8 caracteres')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
      .withMessage('La contraseña no cumple con los requisitos'),
    body('re_password')
      .exists()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Contraseñas desiguales');
        }
        return true;
      }),
    body('email')
      .exists()
      .notEmpty()
      .withMessage('Debe Ingresar un Correo')
      .isEmail().custom(async (value) => {
        const user = await userService.getUserByEmail(value)
        if (user) {
          return Promise.reject('Este correo ya se encuentra registrado');
        }
      }),
  ],

  validateToken: [
    param("token")
      .exists()
      .notEmpty()
      .custom(async (value) => {
        const email = decodeToken(value)
        const user = await userService.getUserByEmail(email)

        if (!user) {
          return Promise.reject("Token Invalido");
        }
      }),
  ],



};