'use strict';

// This is one syntax for creating controller, but might not work after minified
/*
mainMod.controller("ProductController", function($scope,ProductFactory) {
        
    // Wait here that we get response from server
    ProductFactory.getProducts().then(function(data) {
        $scope.products = data;
    });
    
});
*/

// Alternative syntax for creating controller. Minifier should not break it.
mainMod.controller("ProductController", ["$scope","$location","$route","ProductFactory",function($scope, $location, $route, ProductFactory) {
    
    $scope.deleteProduct = function(index) {
        console.log(index);
        ProductFactory.deleteProduct(index).then(function(data) {
            console.log(data);
            //$route.reload();
            $scope.products.splice(index,1);
        });
    
    };
    
    // Wait here that we get response from server
    ProductFactory.getProducts().then(function(data) {
        $scope.products = data;
    });
    
    // Handle Add product -button
    $scope.next = function() {
        $location.path("/add");
    };
    
}]);