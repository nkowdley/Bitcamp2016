var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/*Test page in order to verify mongodb connection*/
router.get('/', function(req, res, next) {
	//Split the song string
	var song = req.query["song"].split(' ').join('+');
	db.collections('songs').insert(song);

});

module.exports = router;
