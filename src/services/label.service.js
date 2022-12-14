const httpStatus = require('http-status')
const { Labels } = require('../models')

const saveLabel = async (label) => {
  try {
    const newLabel = await label.save()
    return newLabel
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

const deleteLabel = async (id) => {
  try {
    const label = await Labels.destroy({
      where: {
        id
      }
    })

    return label
  } catch (error) {
    console.log('===>', error)
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

module.exports = {
  saveLabel,
  deleteLabel
}
