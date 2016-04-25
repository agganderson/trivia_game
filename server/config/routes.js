var questions = require('./../controllers/questions.js');
var users = require('./../controllers/users.js');

module.exports = function(app){
	app.get('/questions', function(req, res){
		// console.log('get questions route');
		questions.index(req, res);
	});

	// app.get('/3questions', function(req, res){
	// 	console.log('in 3questions route');
	// 	questions.get3(req, res);
	// });

	app.post('/questions', function(req, res){
		// console.log('post questions route');
		questions.create(req, res);
	});

	app.get('/users', function(req, res){
		// console.log('users get route');
		users.index(req, res);
	});

	app.post('/users', function(req, res){
		// console.log('users post route');
		users.create(req, res);
	});
}