'use strict';

mainMod.controller("AddProductController", function($http,$q,$scope,$location,ProductFactory) {
    
    $scope.product = {
        name: "",
        price: "",
        post_product: function() {
            console.log($scope.product.name);
            var promise = ProductFactory.addProduct($scope.product);
            promise.then(function (data) {
                //console.log(data);
                $location.path("/");
            });
        }
    
    };
    
    // Handle Products-button
    $scope.back = function() {
        $location.path("/");
    };
});