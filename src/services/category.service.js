const { Category } = require('../models')

const getCategory = async (name) => {
  console.log('Servicios ', name)
  const Category = await Category.findOne({ where: { name: name } })
  return Category
}
const getCategories = () => {}

module.exports = { getCategory, getCategories }
