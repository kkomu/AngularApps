var express = require("express");

var router = express.Router();

router.get("/",function(req,res) {
    var dummy = [{name: "Maito", price: "1.75€"},
                 {name: "Koff", price: "0.90€"}];
    
    res.send(dummy);

});

router.post("/",function(req,res) {


});

router.put("/",function(req,res) {


});

router.delete("/",function(req,res) {


});

module.exports = router;