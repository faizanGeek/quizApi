const mongoose = require('mongoose');
//5ebbc700b1548a3006f2db1c
//5ebbc710b1548a3006f2db1d
const questionsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	options: {
		type: String,
		required: true,
	},
	correctOption: {
		type: Number,
		required: true,
	},
	quiz: {
		type: Number,
		ref: 'quiz',
		required: true,
	},
	points: {
		type: Number,
		required: true,
	},
	id: {
		type: Number,
		required: false,
	},
});

module.exports = mongoose.model('questions', questionsSchema);
