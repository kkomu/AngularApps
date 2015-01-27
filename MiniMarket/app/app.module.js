'use strict';

var mainMod = angular.module("MiniMarket",["ngRoute"]);

mainMod.factory("ProductFactory", function($http) {
    var factory = {};
    
    factory.getProducts = function(scope) {
        
        $http.get("/data").
            success(function(data, status, headers, config) {
                console.log(data);
                scope.products = data;
            }).
            error(function(data, status, headers, config) {
                console.log("error loading data");
            });
    
    };
    
    return factory;

});
