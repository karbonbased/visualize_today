var express = require('express');
var router = express.Router();
var Task = require('../models/tasks.js')
var User = require('../models/users.js');


// INDEX //
router.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated()
	Task.find({}, function(err, tasks) {
	res.render('tasks/index.ejs', {tasks: tasks});
	});
});

// SHOW //
router.get('/:id', function(req, res) {
    res.locals.login = req.isAuthenticated()
    // res.locals.user = req.user.id
    Task.findById(req.params.id, function(err, tasks) {
    res.render('tasks/show.ejs', {tasks: tasks});
    });
});

// JSON //
// router.get('/json', function(req, res) {
// 	find by id and callback
// 	res.send(callback)
// })


// UPDATE //
router.put('/:id', isLoggedIn, function(req, res) {
    User.findById(req.user.id, function(err, user) {
        console.log(user)
    Task.findById(req.params.id, function(err, tasks) {
        user.tasks.push(tasks);
        user.save(function(err, datt) {
            res.redirect('/tasks')
        })
        })
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