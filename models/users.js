// REQUIREMENTS //
var mongoose = require('mongoose');
var TaskSchema = require('./tasks').schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	userIcon: {type: String, required: true, default:"../img/usericons/usericon-master.jpg" },
	dateCreated: { type:Date, default:Date.now },
	tasks: [TaskSchema]
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