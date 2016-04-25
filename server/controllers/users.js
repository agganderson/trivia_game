var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, results){
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
			var newUser = new User(req.body);
			console.log(req.body)
			newUser.save(function(err, results){
				if(err){
					console.log('Could not save user', results);
				}
				else {
					console.log('Saved user');
					res.json(results);
				}
			});
		}
	}
})();