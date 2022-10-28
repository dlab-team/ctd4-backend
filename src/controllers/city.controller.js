const { cityService } = require('../services')

const createCity = async (req, res) => {
  const { name } = req.body
  console.log(name)
  const city = await cityService.getCity(name)
  res.send(city)
}

const updateCity = () => {}

module.exports = { createCity, updateCity }
