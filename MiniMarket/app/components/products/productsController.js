'use strict';

mainMod.controller("ProductController", function($scope,ProductFactory) {
    ProductFactory.getProducts($scope);
    
});