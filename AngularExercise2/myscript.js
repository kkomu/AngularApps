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

ShopApp.controller('shopDataController', function($scope) {

    $scope.shoppingList = [{product:'Milk', price:'2€'},
                           {product:'Banana',price:'1€'},
                           {product:'Corn flakes', price:'5€'},
                           {product:'Eggs',price:'7€'}];

    $scope.addProduct = function() {
        $scope.shoppingList.push({product:$scope.shopProduct,price:$scope.shopPrice});
    };
});