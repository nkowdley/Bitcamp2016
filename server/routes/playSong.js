var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET getSong page. */
router.get('/', function(req, res, next) {
	
	db.collection('songs').findOneandRemove({}, {}, { sort: { 'created_at' : 1} }, function(err, post) {
		res.send(post);
	});



	//res.send("Hello World"+);
 	//res.sendfile('../client/app/index.html');
 });

	module.exports = router;
