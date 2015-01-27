'use strict';

var mainMod = angular.module("MiniMarket",["ngRoute"]);

// Main configuration
mainMod.config(function ($routeProvider) {
    
    //$locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        controller: "ProductController",
        templateUrl: "products.html"
    });
    
    $routeProvider.when('/add', {
        templateUrl: "userproduct.html"
    });

    
});


mainMod.controller("ProductController", function($scope,ProductFactory) {
    ProductFactory.getProducts($scope);
    
});

mainMod.factory("ProductFactory", function($http) {
    var factory = {};
    
    factory.getProducts = function(scope) {
        
        $http.get('/data').
            success(function(data, status, headers, config) {
                console.log(data);
                scope.products = data;
            }).
            error(function(data, status, headers, config) {
                console.log('error loading data');
            });
    
    };
    
    return factory;

});