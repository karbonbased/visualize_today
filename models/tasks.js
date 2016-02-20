// REQUIREMENTS //
var mongoose = require('mongoose');
var later = require('later');


var taskSchema = new mongoose.Schema({
	name: String,
	time: {type:Number, min:0, max: 23, set: function(v) { return Math.round(v)}}
})

var Task = mongoose.model('Task', taskSchema);

module.exports = Task