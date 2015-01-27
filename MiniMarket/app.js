var express = require("express");
var path = require("path");
var user = require("./user");

var app = express();

// This function call is executed for every request. MUST be first app.use-line
app.use(function(req,res,next) {
    console.log(req.method);
    next();
});

// Middleware for user data
app.use("/data", user);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);