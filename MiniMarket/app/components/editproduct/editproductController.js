'use strict';

mainMod.controller("EditProductController", function($scope,$location, ProductFactory) {
    console.log("editproductcontroller");
    
    $scope.product = {
        id: ProductFactory.getProductData().id,
        name: ProductFactory.getProductData().name,
        price: ProductFactory.getProductData().price,
        put_product: function() {
            console.log($scope.product.name);
            var promise = ProductFactory.editProduct($scope.product);
            console.log("lololololo");
            promise.then(function (data) {
                console.log("trololololo");
                console.log(data);
                $location.path("/");
            });
        }
    
    };
    
    // Handle Products-button
    $scope.back = function() {
        $location.path("/");
    };
    
    
    
});