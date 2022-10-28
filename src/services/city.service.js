const { City } = require('../models')

const getCity = async (name) => {
  console.log('Servicios ', name)
  const city = await City.findOne({ where: { name } })
  return city
}
const getCities = () => {}

module.exports = { getCity, getCities }
