var express = require('express');
var router = express.Router();
var request = require('request');


/* GET getSong page. */
router.get('/', function(req, res, next) {
	//var json = JSON.parse(body);
	 //res.send(req.query[body]);

	 //Split the song string
	 var song = req.query["song"].split(' ').join('+');

	 request({
	 	url: 'https://api.spotify.com/v1/search' ,
	 	qs: {q: song, type: 'track', limit: 1} ,
	 	method: 'GET' ,
	 }, function(error, response, body){
	 	var json = JSON.parse(body);
	 	
	 	//Album art: items.album.images (array of image objects)
	 	// var albumArt = json.items[0].images;
	 	//Album name: items.album.name
	 	// var album = json.items.album.name;
	 	//Artist: items.artists.name
	 	// var artist = json.items.artist.name;
	 	//Track: items.tracks.name
	 	// var trackTitle = json.items.tracks.name;
	 })

	//res.send("Hello World"+);
 	//res.sendfile('../client/app/index.html');
 });

module.exports = router;
