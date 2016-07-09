#!/bin/env node

// SETUP
var path = require('path');
var port = process.env.PORT || 8081;
var express = require('express');
var app = express();

// CONFIGURE
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// ROUTES
app.get('/', function(req, res) {
  res.render('index');
});

// LISTEN/START
app.listen(port, function(){
  console.log("Listening on port " + port + "...");
});
