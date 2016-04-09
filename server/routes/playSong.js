var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	console.log("here");
	//db.collection('songs').findOne({}).sort{$min: 'time'}, {}, function(err, post) {
	//	console.log(post);
	//	res.send(post);
	//});
 });

module.exports = router;
