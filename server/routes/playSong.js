var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	//Find all the songs currently in the db, sort them oldest to newest
	db.collection('songs').find({}).sort({"time" : -1}).toArray(function (err, song) {
		if (err) {
			console.log("Error: (err)");
			res.send(err);
		}
		console.log(song);
		//Parse the JSON of the song
		//var songJSON = JSON.parse(song[0]);
		db.collection('songs').remove(song[0]);
		//Send the song JSON info
		res.send(song[0]);
		//Remove song from the db
	});
 });

module.exports = router;
