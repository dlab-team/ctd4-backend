const httpStatus = require('http-status')
const { json } = require('sequelize')
const { Quiz } = require('../models')
// get global => localhost:3000/quizzes
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
// get individual => localhost:3000/quizzes/1
const getQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.findByPk(req.params.id)
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}

// post => localhost:3000/quizzes
const postQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.create({
      name: req.body.name,
      url_logo: req.body.url_logo,
      duration: req.body.duration
    })
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}
// put - update => localhost:3000/quizzes/1
const updateQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.update(
      {
        name: req.body.name,
        url_logo: req.body.url_logo,
        duration: req.body.duration
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.json(quizes)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: console.error.message
    })
  }
}
// delete => localhost:3000/quizzes/1
const deleteQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.destroy({
      where: {
        id: req.params.id
      }
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
