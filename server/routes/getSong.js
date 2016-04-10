var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');

// var accountSid = 'ACadbf6e101408ffbc1c22481542ca1f5a';
// var authToken = '55e7a5b6e63fdad33b5b146dbceace84';
// var client = require("twilio")(accountSid, authToken);

var db=mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	if (!req.query["song"] && !req.query["Body"])
	{
		console.log("bad");
		res.send("Song Not Specified!");
		res.end();
	}
	else {
		//Split the song string
		if (req.query["song"])
			var song = req.query["song"].split(' ').join('+');
		else {
			var song = req.query["Body"].split(' ').join('+');
		}
		console.log(song);

		request({
			url: 'https://api.spotify.com/v1/search' ,
			qs: {q: song, type: 'track', limit: 1} ,
			method: 'GET' ,
		}, function(error, response, body){
			var json = JSON.parse(body);
			if(json.tracks.total=='0')
			{
				res.send("Song Not Found!");
				res.end();
			}
			else {
				//Album art: (array of image objects)
				var albumArt = json.tracks.items[0].album.images[1].url;
				//Album name
				var album = json.tracks.items[0].album.name;
				//Artist
				var artist = json.tracks.items[0].artists[0].name;
				//Track
				var trackTitle = json.tracks.items[0].name;
				//Get Song
				var mp3 = json.tracks.items[0].preview_url;
				var infoToSend = 'Song Name: ' + trackTitle + ' | Artist: ' + artist + ' | Album: ' + album;
				var info = {
					'name' : trackTitle,
					'artist' : artist,
					'album' : album,
					'art' : albumArt,
					'time' : (new Date).getTime(),
					'mp3' : mp3
				};
				//Add the song to the db.
				console.log(info);
				db.collection('songs').insert(info);
				res.send("Song Added");
			}
		})

	}
});

module.exports = router;
