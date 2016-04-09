var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	console.log("here");
	// db.collection('songs').findOne({}).sort({$min: 'time'}), {}, function(err, post) {
	// 	console.log(post);
	// 	res.send(post);
	// });
	
	db.collection('songs').find({}).toArray(function (err, song) {
		if (err) {
			console.log("Error: (err)");
			return next(err);
		}
		//console.log(req.url);
		//console.log(song[0]);
		res.send(song[0]);
		db.collection('songs').remove(song[0]);
	});

	// db.songs.findOne({}, function(err, song) {
	// 	console.log(song);
	// });
 });

module.exports = router;
