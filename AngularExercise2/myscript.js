var ShopApp = angular.module('ShopApp',['ngRoute']);

ShopApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller:'shopDataController',
        templateUrl: 'view2.html'
    })
    
    .when('/products', {
        controller:'shopDataController',
        templateUrl:'view1.html'
    })
    
    .otherwise({redirectTo:'/'});
});

ShopApp.factory('shopFactory', function() {
    
    var allProducts = [{product:'Milk', price:'2€'},
                           {product:'Banana',price:'1€'},
                           {product:'Corn flakes', price:'5€'},
                           {product:'Eggs',price:'7€'}];

    var factory = {};
    
    factory.getProducts = function() {
        return allProducts;
    };
    
    factory.addProduct = function(newProduct) {
        allProducts.push(newProduct);
    };
    
    return factory;
});

ShopApp.controller('shopDataController', function($scope, shopFactory) {
    
    $scope.products = shopFactory.getProducts();
    
    $scope.addProduct = function() {
        shopFactory.addProduct({product:$scope.shopProduct,price:$scope.shopPrice});
        $scope.shopProduct = "";
        $scope.shopPrice = "";
    };
});