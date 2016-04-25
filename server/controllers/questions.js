var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = (function(){
	return {
		index: function(req, res){
			Question.find({}, function(err, results){
				if(err){
					console.log('Did not find questions', results);
				}
				else {
					console.log('Got the questions');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			// console.log('in create');
			var newQuestion = new Question({question: req.body.question, correct: req.body.correct, fake1: req.body.fake1, fake2: req.body.fake2});
			// console.log(req.body.correct);
			newQuestion.save(function(err, results){
				if(err){
					console.log('Could not save question', results);
				}
				else {
					console.log('Saved questions');
					res.json(results);
				}
			});
		}
	}
	// get3: function(req, res){

	// }
})();