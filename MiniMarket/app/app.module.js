'use strict';

var mainMod = angular.module("MiniMarket",["ngRoute"]);

mainMod.factory("ProductFactory", function($http,$q) {
    var factory = {};
 
    factory.getProducts = function(scope) {
        var deferred = $q.defer();
        
        $http.get("/data")
            .success(function(data, status, headers, config) {
                console.log(data);
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                console.log("error loading data");
            });
    
        return deferred.promise;   
    };
    
    
    
    
    // TBD
    factory.addProduct = function() {
        /*    
        $http.post("/data")
            .success(function(data, status, headers, config) {
                console.log("OK");
            })
            .error(function(data, status, headers, config) {
                console.log("FAIL");
            });
        */
        console.log("sdfASDFSD");
    };
    
    
    return factory;

});
