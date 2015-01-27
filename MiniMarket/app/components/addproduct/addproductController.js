'use strict';

mainMod.controller("AddProductController", function($scope,ProductFactory) {
    
    $scope.addProduct = function() {
        ProductFactory.addProduct({product:$scope.productName,
                                   price:$scope.productPrice,
                                   info:$scope.productInfo});
        $scope.productName = "";
        $scope.productPrice = "";
        $scope.productInfo = "";
    };
    
});