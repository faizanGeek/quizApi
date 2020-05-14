const express = require('express');
const mongoose = require('mongoose');
const Quiz = require('../models/quiz');
const Question = require('../models/questions');
const router = express.Router();

//Get single quiz through ID
router.get('/:quiz_id', async (req, res) => {
	try {
		let quiz = await Quiz.findOne({ id: req.params.quiz_id });
		if (quiz == null) {
			return res.status(404).json({});
		}
		res.status(200).json(quiz);
	} catch (err) {
		res.status(400).json({ status: 'failure', reason: err.message });
	}
});

//POST quiz data
router.post('/', async (req, res) => {
	var rand = Math.floor(100 + Math.random() * 900).toString();
	var rand1 = Math.floor(100 + Math.random() * 900).toString();
	var rand2 = Math.floor(100 + Math.random() * 900).toString();
	var dater = new Date().getMilliseconds().toString();
	var id = rand + dater + rand1 + rand2;
	id = parseInt(id);

	const quiz = new Quiz(req.body);
	quiz.id = id;
	try {
		let newQuiz = await quiz.save();
		res.status(201).json(newQuiz);
	} catch (err) {
		res.status(400).json({ reason: err.message, status: 'failure' });
	}
});

module.exports = router;
