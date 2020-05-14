const express = require('express');
const Question = require('../models/questions');
const Quiz = require('../models/quiz');
const router = express.Router();

router.get('/:question_id', async (req, res) => {
	try {
		let question = await Question.findOne({ id: req.params.question_id });

		if (question == null) {
			return res.status(404).json({});
		}
		res.status(200).json(question);
	} catch (err) {
		res.status(400).json({ reason: err.message, status: 'failure' });
	}
});

router.post('/', async (req, res) => {
	var rand = Math.floor(100 + Math.random() * 900).toString();
	var rand1 = Math.floor(100 + Math.random() * 900).toString();
	var rand2 = Math.floor(100 + Math.random() * 900).toString();
	var dater = new Date().getMilliseconds().toString();
	var id = rand + dater + rand1 + rand2;
	[name, options, correct_option, quiz, points] = [
		req.body.name,
		req.body.options,
		req.body.correct_option,
		req.body.quiz.toString(),
		req.body.points,
	];
	let data = {
		id: parseInt(id),
		name: name,
		options: options,
		correct_option: correct_option,
		quiz: quiz,
		points: points,
	};
	const question = new Question(data);
	//question.id = parseInt(id);
	try {
		//let check = await Quiz.findOne({ id: req.body.quiz });
		//if (check) {
		let newQuestion = await question.save();
		res.status(201).json(newQuestion);
	} catch (err) {
		res.status(400).json({ reason: err.message, status: 'failure' });
	}
});

module.exports = router;
