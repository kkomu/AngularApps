var express = require("express");
var path = require("path");
var user = require("./user");
var bodyParser = require("body-parser");

var app = express();

// Use Body parser middleware
app.use(bodyParser.json());

// This function call is executed for every request. MUST be first app.use-line
app.use(function(req,res,next) {
    console.log(req.method+" -> "+req.path);
    next();
});

// Middleware for user data
app.use("/data", user);

app.use(express.static(path.join(__dirname, "app")));
//app.use(express.static(__dirname));

app.listen(3000);