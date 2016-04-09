var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {

	db.collection('songs').findOneAndRemove({}, {$min: 'time'}, {}, function(err, post) {
		console.log(post);
		res.send(post);
	});
 });

	module.exports = router;
