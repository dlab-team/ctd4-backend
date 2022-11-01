const httpStatus = require('http-status')
const { json } = require('sequelize')
const { City } = require('../models')

const getCities = async (req, res) => {
  try {
    const cities = await City.findAll({
      attributes: ['id', 'countryId', 'name']
    })
    res.json(cities)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}

module.exports = { getCities }
