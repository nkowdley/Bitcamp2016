/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

//mongo connection, set the connection to a variable, db
mongoose.connect('mongodb://localhost/bitcamp2016', function(err) {
  if(err) {
    console.log('MONGO CONNECTION ERROR', err);
  } else {
    console.log('MONGO CONNECTION SUCCESSFUL');
  }
});

var db = mongoose.connection;
// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
