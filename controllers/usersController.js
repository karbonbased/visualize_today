// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Task = require ('../models/tasks.js');
var passport = require('passport');

// INDEX //
router.get('/', function(req, res) {
	res.render('users/index.ejs');
})

// NEW //


// LOGOUT //


// SHOW //


// JSON //


// CREATE //


// LOGIN //


// CREATE TASK //


// DELETE //


// MIDDLEWARE //
// Function to check login


//LOCALS


module.exports = router;