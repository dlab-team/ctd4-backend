const { body, param } = require('express-validator');
const { userService } = require("../services");

module.exports = {
    validateUser: [
        body('*.fullname').exists().notEmpty().withMessage('Debe Ingresar su Nombre Completo'),
        body('*.email')
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

};