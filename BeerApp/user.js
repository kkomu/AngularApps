var express = require('express');

var router = express.Router();

var beerTypes = [{type: 'Ale'},
                {type: 'Lager'},
                {type: 'Souts & Porters'},
                {type: 'Malt'}];
    
router.get("/",function(req,res) {
    console.log("express GET");
    res.send(beerTypes);

});

router.post("/",function(req,res) {
    console.log("express POST");
    
});

router.put("/",function(req,res) {
    console.log("express PUT");
    
});

router.delete("/",function(req,res) {
    console.log("express DELETE");
    
});

module.exports = router;