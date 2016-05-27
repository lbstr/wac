#!/bin/env node
var fs = require('fs');
var path = require('path');

var express = require('express');
var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use('/', router);

app.use(express.static(path.join(__dirname, 'build')));

// TODO: remove this and use templatecache
app.use(express.static(path.join(__dirname, 'app')));

app.listen(process.env.PORT || 8081);