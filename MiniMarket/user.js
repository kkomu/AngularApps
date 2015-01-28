var express = require("express");

var router = express.Router();

router.get("/",function(req,res) {
    console.log("express GETTING");
    var dummy = [{name: "Maito", price: "1.75€"},
                 {name: "Koff", price: "0.90€"}];
    
    res.send(dummy);

});

router.post("/",function(req,res) {
    console.log("express POSTING");

});

router.put("/",function(req,res) {
    console.log("express PUTTING");

});

router.delete("/",function(req,res) {
    console.log("express DELETING");

});

module.exports = router;