const httpStatus = require('http-status');
const { userService } = require('../services');
// TODO: cambiar nombre del metodo a un estandar es decir 'getUsers' si es una lista de usuarios o 'getUser' si solo es uno
const getUserInfo = async (req, res) => {
    try {
        const userInfo = await Users.findOne({
            where: { id: userId }
        })
        return userInfo

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};

const saveUser = (req, res) => {
    // verify access token 
    // get user from body
    // check if User exist 
    // if not exist return error message
    // save user in database
    // return successful message

}
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const { email, name, lastName, address, phoneNumber, cityId } = req.body.user
        const userExists = await userService.getUserById(userId)
        if (!userExists) {
            const error = new Error('¡EL usuario no existe!')
            return res.status(httpStatus.NOT_FOUND).json({
                ok: false,
                msg: error.message
            });
        }
        userExists.name = name || userExists;
        userExists.email = email || userExists.email;
        userExists.lastName = lastName || userExists.lastName
        userExists.address = address || userExists.address
        userExists.phoneNumber = phoneNumber || userExists.phoneNumber
        userExists.cityId = cityId || userExists.cityId


        const updateUser = await userService.saveUser(userExists)

        if (!updateUser) {
            const error = new Error('¡EL usuario No pudo ser actualizado!')
            return res.status(httpStatus.BAD_REQUEST).json({
                ok: false,
                msg: error.message
            });
        }

        return res.status(httpStatus.OK).json({ msg: "El usuario se actualizo correctamente" });

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.message
        });

    }

}

module.exports = { getUserInfo, saveUser, updateUser }
