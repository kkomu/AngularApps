'use strict';

// Main configuration
mainMod.config(function ($routeProvider) {
    
    //$locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        controller: "ProductController",
        templateUrl: "./components/products/productsView.html"
    });
    
    $routeProvider.when('/add', {
        controller: "AddProductController",
        templateUrl: "./components/addproduct/addproductView.html"
    });
    
    $routeProvider.when('/edit', {
        controller: "EditProductController",
        templateUrl: "./components/editproduct/editproductView.html"
    });
});
