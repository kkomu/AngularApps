'use strict';

mainMod.factory('BeerFactory', function($resource, $location) {
    var factory = {};
    
    factory.getBeerTypes = function() {
        var req = $resource('/data', {}, {"get":{method: "GET", isArray: false}});
        return req.query().$promise;
    };
    
    factory.addBeer = function(data) {
        console.log("DATA:");
        console.log(data);
        var req = $resource('/data/beer', {}, {"post":{method: "POST"}});
        return req.post(data).$promise;
    };
    
    factory.getBeerList = function() {
        var req = $resource('/data/beer', {}, {"get":{method: "GET", isArray: false}});
        return req.query().$promise;
    };
    
    return factory;
    
});