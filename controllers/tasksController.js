var express = require('express');
var router = express.Router();
var Task = require('../models/tasks.js')
var User = require('../models/users.js');


// INDEX //
router.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated()
	// User.findById(req.user.id, function(err, users) {
	res.render('tasks/index.ejs');
	// })
});

// JSON //
// router.get('/json', function(req, res) {
// 	find by id and callback
// 	res.send(callback)
// })


// SHOW //


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