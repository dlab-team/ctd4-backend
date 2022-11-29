const httpStatus = require('http-status')
const { json } = require('sequelize')
const { Quiz } = require('../models')
// get global
const getQuizes = async (req, res) => {
  try {
    const quizes = await Quiz.findAll({
      attributes: ['id', 'url_logo', 'name', 'duration']
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}
// get individual
const getQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.findOne({
      attributes: { include: ['id', 'url_logo', 'name', 'duration'] }
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}

// post
const postQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.findAll({
      attributes: ['id', 'url_logo', 'name', 'duration']
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}
// put - update
const updateQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.findAll({
      attributes: ['id', 'url_logo', 'name', 'duration']
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}
// delete
const deleteQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.findAll({
      attributes: ['id', 'url_logo', 'name', 'duration']
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}

module.exports = { getQuizes, getQuiz, postQuiz, updateQuiz, deleteQuiz }
