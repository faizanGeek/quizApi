const express = require('express');
const mongoose = require('mongoose');
const Quiz = require('../models/quiz');
const Questions = require('../models/questions');
const router = express.Router();

router.get('/:quiz_id', async (req, res) => {
	try {
		let quiz = await Quiz.findById(req.params.quiz_id).lean();
		if (quiz == null) return res.status(404).json({});
		let allQuestions = await Questions.find({ quiz: quiz._id });
		quiz.questions = allQuestions;
		res.status(200).json(quiz);
	} catch (err) {
		res.status(400).json({ reason: err.message, status: 'failure' });
	}
});

module.exports = router;
