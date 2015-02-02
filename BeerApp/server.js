var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var user = require('./user');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log(req.method+ "->" +req.path);
    next();
});

app.use('/data', user);

app.use(express.static(path.join(__dirname, 'app')));

app.listen(3000);