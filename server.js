// REQUIREMENTS //
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var passport = require('passport');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var later = require('later');

var usersController = require('./controllers/usersController.js');
var tasksController = require('./controllers/tasksController.js');

// MIDDLEWARE //
require('./config/passport.js')(passport);

app.use(express.static('public'));
app.use(logger('dev'));
app.use(cookieParser()); // to resolve "TypeError: Cannot read property 'connect.sid' of undefined"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// refer to other method override code if any issues arise
// app.use(methodOverride('_method'));
// Switching to Thom's code for this, error saving parts of form....?
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Function to check login
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// LOCALS //
app.use(function(req, res, next) {
	res.locals.login = req.isAuthenticated();
  next();
})


// PASSPORT //
app.use(session({ secret: 'sterceseverywhere'}));
app.use(passport.initialize());
app.use(passport.session());

// TESTING CODE WITH LATER
	// var time = 12.5
	// var days = later.parse.recur().on(time).hour()
	
 //  // var daily = later.parse.text('every day at 8:00 AM')//,
 //      occurrences = later.schedule(days).next(10);
 //      // console.log(days);
 //  for(var i = 0; i < 10; i++) {
 //    console.log(occurrences[i]);
 //  }

// ROUTING //
app.use('/tasks', tasksController);
app.use('/users', usersController);

// INDEX //
app.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated()
	res.render('index.ejs');
})

// NEW //
app.get('/signup', function(req, res) {
	res.render('signup.ejs')
})

// LOGOUT //
app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/')
})

// CONNECTIONS //
mongoose.connect('mongodb://localhost:27017/visualize');

app.listen(port, function() {
	console.log('listening on port ' + port)
})