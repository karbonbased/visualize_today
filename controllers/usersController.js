// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Task = require ('../models/tasks.js');
var passport = require('passport');

// INDEX // AS REDIRECT
router.get('/', isLoggedIn, function(req, res) {
	res.locals.login = req.isAuthenticated();
	res.redirect('/users/' + req.user.id);
});

// INDEX //
// router.get('/', function(req, res) {
// 	res.locals.login = req.isAuthenticated()
// 	User.find({}, function(err, users) {
// 		console.log(err)
// 	res.render('users/index.ejs', {users: users});
// 	});
// });

// USER LIBRARY //
router.get('/userlib', isLoggedIn, function(req, res) {
	res.locals.login = req.isAuthenticated();
	res.locals.usertrue = (req.user.id == req.params.id);
	User.find({}, function(err, users) {
		res.render('users/userlib.ejs', {users: users});
	})
})

// NEW //
// router.get('/new', function(req, res) {
// 	res.locals.login = req.isAuthenticated()
// 	res.locals.users = req.user.id
// 	// res.send('hi')
// 	res.render('users/new.ejs')
// })

// SHOW //
router.get('/:id', isLoggedIn, function(req, res) {
	res.locals.login = req.isAuthenticated()
	res.locals.usertrue = (req.user.id == req.params.id);
	User.findById(req.params.id, function(err, users) {
	res.render('users/show.ejs', {users: users});
	// res.send(users)
	})
})

// EDIT SPECIFIC TASK ROUTE //
router.get('/:id/edit/:taskid', isLoggedIn, function(req, res) {
	res.locals.login = req.isAuthenticated();
	res.locals.usertrue = (req.params.id == req.user.id)
	User.findById(req.params.id, function(err, user) {
	console.log("user is " + user);
	Task.findById(req.params.taskid, function(err,tasks) {
		res.render('users/edit.ejs', {tasks: tasks});
	})
	})
})

// UPDATE TASK //
router.put('/:id', function(req,res) {
	// update the tasks document
	Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err,task) {
		console.log("task is " + task)
		console.log("UPDATED!")

			// update the user
	User.update(  {"tasks._id" : req.params.id }, 
		{$set: 
			{ "tasks.$.name": task.name , 
			 "tasks.$.image": task.image , 
			 "tasks.$.time": task.time }
			}, 
			function(err, data) {
			res.redirect('/users')

	})
	});
})

// DELETE TASK //
router.delete('/:id/delete', function(req, res){
	Task.findById(req.params.id, function(err, task){
		console.log(task)
		console.log(req.user.id)
		var oneTask = task

		User.findById( req.user.id, function(err, user) {
			user.tasks.id(req.params.id).remove()
			user.save(function() {
				res.redirect('/users')
			});
		});
	});
})


// JSON //
router.get('/:id/json', function(req, res) {
	User.findById(req.params.id, function(err,json) {
		res.send({json: json})
	});
})

// CREATE //
router.post('/', passport.authenticate('local-signup', {
	failureRedirect: '/'}), function(req, res) {
	res.redirect('/users/' + req.user.id)
});

// LOGIN //
router.post('/login', passport.authenticate('local-login', {
	failureRedirect : '/users'}, console.log('failed to login, router.post users/login')), function(req, res) {
	res.redirect('/users/' + req.user.id)
});

// CREATE TASK //
router.post('/:id', function(req, res) {
	var newTask = new Task(req.body);
	newTask.save(function(err, task) {
		User.findById(req.params.id, function(err, user) {
			user.tasks.push(task);
			user.save(function(err, data) {
				console.log("new task created and saved to user");
				res.redirect('/users/' + req.params.id);
			})
		})
	})
})

// DELETE //
router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, data){
		res.redirect('/users')
	})
})

// MIDDLEWARE //
// Function to check login
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// LOCALS //
router.use(function(req, res, next) {
	res.locals.login = req.isAuthenticated();
  next();
})

module.exports = router;