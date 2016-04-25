var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true},
	correct: {type: String, required: true},
	fake1: {type: String, required: true},
	fake2: {type: String, required: true}
});

mongoose.model('Question', QuestionSchema);
QuestionSchema.plugin(uniqueValidator);