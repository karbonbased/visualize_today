// REQUIREMENTS //
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	name: {type: String, required: true},
	image: {type: String, required: true},
	time: {type:String, required: true},
	priority: String
})

var Task = mongoose.model('Task', taskSchema);

module.exports = Task