'use strict';

var mainMod = angular.module("MiniMarket",["ngRoute","ngResource"]);

mainMod.factory("ProductFactory", function($http, $q, $resource) {
    var factory = {};
    
    // List products
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
    
    // Add new product
    factory.addProduct = function(data) {
        return $resource("/data", {}, {"post":{method: "POST"}}).post(data).$promise;
    };
    
    // Delete product
    factory.deleteProduct = function(index) {
        var req = $resource("/data", {id:index}, {"delete":{method: "DELETE"}});
        return req.delete().$promise;
    };
    
    return factory;

});
