const httpStatus = require('http-status')
const { json } = require('sequelize')
const { Category, Skill } = require('../models')

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Skill,
          attributes: ['id', 'name']
        }
      ]
    })

    res.json(categories)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}

module.exports = { getCategories }
