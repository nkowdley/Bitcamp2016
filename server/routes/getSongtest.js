var express = require('express');
var router = express.Router();

/* GET getSong page. */
router.get('/', function(req, res, next) {
  res.send(req.query.toString());
  //res.sendfile('../client/app/index.html');
});

module.exports = router;
