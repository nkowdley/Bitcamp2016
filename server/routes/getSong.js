var express = require('express');
var router = express.Router();
var request = require('request');


/* GET getSong page. */
router.get('/', function(req, res, next) {
	//var json = JSON.parse(body);
	 //res.send(req.query[body]);
	 res.send(req.query["song"]);
	 var song = req.query["song"];
	 res.send(req.query["song"]);
	//res.send("Hello World"+);
 	//res.sendfile('../client/app/index.html');
 });

module.exports = router;
