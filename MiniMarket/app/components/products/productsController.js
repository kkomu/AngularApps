'use strict';

mainMod.controller("ProductController", function($scope,ProductFactory) {
    
    $scope.jotain = "Kyo Komu";
    
    // Wait here that we get response from server
    ProductFactory.getProducts().then(function(data) {
        $scope.products = data;
    });
    
});