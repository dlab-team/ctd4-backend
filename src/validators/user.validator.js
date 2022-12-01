const { body, param } = require('express-validator');
const { userService } = require("../services");

module.exports = {
    validateUser: [
        body('*.fullname').exists().notEmpty().withMessage('Debe Ingresar su Nombre Completo'),
        body('*.email')
            .exists()
            .notEmpty()
            .withMessage('Debe Ingresar un Correo')
            .isEmail().custom(async (value, { req }) => {
                const { email } = req.user
                if (email !== value) {
                    return Promise.reject('El correo no coincide con el del Perfil');
                }
            }),
    ],

};