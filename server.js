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

var usersController = require('./controllers/usersController.js');
var tasksController = require('./controllers/tasksController.js');

// MIDDLEWARE //
// require('./config/passport.js')(passport);

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// refer to other method override code if any issues arise
app.use(methodOverride('_method'));

// PASSPORT //
// app.use(session({ secret: 'sterceseverywhere'}));
// app.use(passport.initialize());
// app.use(passport.session());

// ROUTING //
app.use('/tasks', tasksController);
app.use('/users', usersController);

app.get('/', function(req, res) {
	res.render('index.ejs');
})

// CONNECTIONS //
mongoose.connect('mongodb://localhost:27017/visualize');

app.listen(port, function() {
	console.log('listening on port ' + port)
})