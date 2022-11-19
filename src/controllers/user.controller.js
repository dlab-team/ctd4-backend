const httpStatus = require('http-status')
const { User, WorkProfile } = require('../models')
const { userService } = require('../services')

const getUserInfo = async (req, res) => {
  try {
    const userInfo = await User.findOne({
      attributes: { exclude: ['password'] },
      include: [ { model: WorkProfile } ],
      where: { id: req.user.id }
    })

    res.json(userInfo)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.user.id

    const { email, name, lastName, address, phoneNumber, cityId } =
      req.body.user
    const userExists = await userService.getUserById(userId)
    if (!userExists) {
      const error = new Error('¡EL usuario no existe!')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.message
      })
    }
    userExists.name = name || userExists.name
    userExists.email = email || userExists.email
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
      })
    }

    return res
      .status(httpStatus.OK)
      .json({ msg: 'El usuario se actualizo correctamente' })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.message
    })
  }
}

const getEducationalProfiles = async (req, res) => {
    try {
        const userId = req.params

        const userExists = await userService.getUserById(userId.userId)
        if (!userExists) {
            const error = new Error('¡EL usuario no existe!')
            return res.status(httpStatus.NOT_FOUND).json({
                ok: false,
                msg: error.message
            });
        }
        const profile = await userService.getEducationalProfilesByIdUser(userId)
        if (!profile) {
            const error = new Error('¡No se pudo obtener el perfil!')
            return res.status(httpStatus.NOT_FOUND).json({
                ok: false,
                msg: error.message
            });
        }

        return res.status(httpStatus.OK).json({ data: profile });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.message
        });
    }
}

module.exports = { getUserInfo, updateUser, getEducationalProfiles }
