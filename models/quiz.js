const mongoose = require('mongoose');
//5ebbbac5b326d62793cb1cef
//5ebbbaf8b326d62793cb1cf0
const quizSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: false,
	},
});

module.exports = mongoose.model('quiz', quizSchema);
