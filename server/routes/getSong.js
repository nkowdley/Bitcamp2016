var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var db=mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	//var json = JSON.parse(body);
	//res.send(req.query[body]);
	if (!req.query["song"])
	{
		res.end();
	}
	else {
		//Split the song string
		var song = req.query["song"].split(' ').join('+');


		request({
			url: 'https://api.spotify.com/v1/search' ,
			qs: {q: song, type: 'track', limit: 1} ,
			method: 'GET' ,
		}, function(error, response, body){
			var json = JSON.parse(body);
			//Album art: (array of image objects)
			var albumArt = json.tracks.items[0].album.images[0].url;
			//Album name
			var album = json.tracks.items[0].album.name;
			//Artist
			var artist = json.tracks.items[0].artists[0].name;
			//Track
			var trackTitle = json.tracks.items[0].name;
			var infoToSend = 'Song Name: ' + trackTitle + ' | Artist: ' + artist + ' | Album: ' + album;
			var info = {
				'name' : trackTitle,
				'artist' : artist,
				'album' : album
			};
			//Add the song to the db.
			db.collection('songs').insert(info);
			res.send(info);
		})

		//res.send("Hello World"+);
		//res.sendfile('../client/app/index.html');
	}
});

module.exports = router;
