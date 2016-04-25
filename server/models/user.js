var mongoose =  require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	answer1: {type: Boolean, default: false, required: true},
	answer2: {type: Boolean, default: false, required: true},
	answer3: {type: Boolean, default: false, required: true},
	score: {type: Number, default: 0},
	percentage: Number
});

mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator);