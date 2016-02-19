var express = require('express');
var router = express.Router();
var Task = require('../models/tasks.js')

// INDEX //
router.get('/', function(req, res) {
	res.render('index.ejs')
})

// JSON //
// router.get('/json', function(req, res) {
// 	find by id and callback
// 	res.send(callback)
// })


// SHOW //


module.exports = router;