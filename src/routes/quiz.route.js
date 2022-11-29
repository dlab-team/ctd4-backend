const express = require('express')
const router = express.Router()
const { quizController } = require('../controllers/')

router.get('/', quizController.getQuizes)
router.get('/:id', quizController.getQuiz)
router.post('/', quizController.postQuiz)
router.put('/:id', quizController.updateQuiz)
router.delete('/:id', quizController.deleteQuiz)
module.exports = router
