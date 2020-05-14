require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const quiz = require('./routes/quiz');
const questions = require('./routes/questions');
const quizQuestions = require('./routes/quizQuestions');
const app = express();

//mongoose connection
mongoose.connect(process.env.url);

mongoose.connection.on('error', (error) => {
	console.log(error);
});
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

// use
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/quiz', quiz);
app.use('/api/questions', questions);
app.use('/api/quiz-questions', quizQuestions);

// server started
PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log('server is started');
});
