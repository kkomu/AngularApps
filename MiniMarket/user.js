var express = require("express");

var router = express.Router();

var dummy = [{name: "Maito", price: "1.75€"},
             {name: "Koff", price: "0.90€"}];

router.get("/",function(req,res) {
    console.log("express GETTING");

    res.send(dummy);

});

router.post("/",function(req,res) {
    console.log("express POSTING");
    dummy.push(req.body);
    res.send("OK");
});

router.put("/",function(req,res) {
    console.log("express PUTTING");
    dummy.splice(req.body.id,1);
    var temp = {name: req.body.name, 
                price: req.body.price};
    
    dummy.push(temp);
    

});

router.delete("/",function(req,res) {
    console.log("express DELETING");
    dummy.splice(req.query.id,1);
    res.send("OK");

});

module.exports = router;