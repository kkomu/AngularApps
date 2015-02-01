'use strict';

mainMod.controller("PageOneController", ['$scope', 'BeerFactory', function($scope, BeerFactory) {
    $scope.beer = {
        type: "",
        name: "",
        place: "",
        review: "",
        post_beer: function() {
            console.log($scope.beer);
            /*var promise = beerFactory.addProduct($scope.product);
            promise.then(function (data) {
                //console.log(data);
                $location.path("/");
            });*/
        }
    };
    
    BeerFactory.getBeerTypes().then(function(data) {
        console.log("3");
        console.log(data);
        console.log("4");
        $scope.beerTypes = data;
    });
    
}]);