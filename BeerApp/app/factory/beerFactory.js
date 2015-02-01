'use strict';

mainMod.factory('BeerFactory', function($resource, $location) {
    var factory = {};
    
    factory.getBeerTypes = function(scope) {
        console.log("1");
        var req = $resource('/data', {}, {"get":{method: "GET"}});
        console.log("2");
        return req.get().$promise;
    };
    
    return factory;
    
});