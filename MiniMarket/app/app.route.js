'use strict';

// Main configuration
mainMod.config(function ($routeProvider) {
    
    //$locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        controller: "ProductController",
        templateUrl: "./app/components/products/productsView.html"
    });
    
    $routeProvider.when('/add', {
        controller: "AddProductController",
        templateUrl: "./app/components/addproduct/addproductView.html"
    });
});
