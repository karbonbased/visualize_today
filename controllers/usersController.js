// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Task = require ('../models/tasks.js');
var passport = require('passport');

// INDEX //
router.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated()
	User.find({}, function(err, users) {
		console.log(err)
	res.render('users/index.ejs', {users: users});
	});
});

// // NEW //
// router.get('/signup', function(req, res) {
// 	res.render('signup.ejs')
// })

// LOGOUT //


// SHOW //
router.get('/:id', isLoggedIn, function(req, res) {
	res.locals.usertrue = (req.user.id == req.params.id);
	User.findById(req.params.id, function(err, users) {
	res.render('users/show.ejs', {users: users});
	// res.send(users)
	})
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
	failureRedirect : '/users'}, console.log('failed')), function(req, res) {
	res.redirect('/users/' + req.user.id)
});

// CREATE TASK //


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