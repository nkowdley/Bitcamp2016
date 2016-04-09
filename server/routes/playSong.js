var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {	
	//Find all the songs currently in the db, sort them oldest to newest
	db.collection('songs').find({}).sort({created_at : -1}).toArray(function (err, song) {
		if (err) {
			console.log("Error: (err)");
			return next(err);
		}
		//Send the song JSON info
		res.send(song[0]);
		//Remove song from the db
		db.collection('songs').remove(song[0]);
	});
 });

module.exports = router;
