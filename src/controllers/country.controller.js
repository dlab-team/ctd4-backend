const httpStatus = require('http-status');
const { json } = require('sequelize');
const { Country } = require('../models');

const getCountries = async (req, res) => {
  try{
    const countries = await Country.findAll({
      attributes: ['id', 'name']
    })
    res.json(countries)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok:false,
      msg: console.error.mesagge
    });
  }
};
module.exports = {getCountries}
