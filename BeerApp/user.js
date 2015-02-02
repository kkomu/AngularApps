var express = require('express');

var router = express.Router();

var beerTypes = [{type: 'Ale'},
                {type: 'Lager'},
                {type: 'Souts & Porters'},
                {type: 'Malt'}];

var beerReviews = [];

// Return beer types array to client
router.get("/",function(req,res) {
    console.log("express GET");
    res.send(beerTypes);

});

router.get('/beer',function(req,res) {
    console.log("express GET");
    res.send(beerReviews);

});

router.post('/beer',function(req,res) {
    console.log("express POST");
    beerReviews.push(req.body);
    console.log(beerReviews);
    res.send("OK");
    
});

router.put('/beer',function(req,res) {
    console.log("express PUT");
    
});

router.delete('/beer',function(req,res) {
    console.log("express DELETE");
    
});

module.exports = router;