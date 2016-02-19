// REQUIREMENTS //
var mongoose = require('mongoose');
var Task = require('./tasks.js');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	email: String,
	password: String,
	firstName: String,
	lastName: String,
	dateCreated: { type:Date, default:Date.now },
	tasks: [Task]
})

// HASH THE PASSWORD //
userSchema.methods.hash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// CHECK PASSWORD IS VALID //
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;