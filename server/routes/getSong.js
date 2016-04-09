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
	 	res.send(body);
	 })

	//res.send("Hello World"+);
 	//res.sendfile('../client/app/index.html');
 });

module.exports = router;
