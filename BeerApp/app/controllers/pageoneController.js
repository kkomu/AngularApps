'use strict';

mainMod.controller("PageOneController", ['$scope', 'BeerFactory', function($scope, BeerFactory) {
    $scope.beer = {
        type: "",
        name: "",
        place: "",
        review: "",
        post_beer: function() {
            console.log($scope.beer);
            var promise = BeerFactory.addBeer($scope.beer);
            promise.then(function (data) {
                console.log(data);
                $scope.beer.type = "";
                $scope.beer.name = "";
                $scope.beer.place = "";
                $scope.beer.review = "";
                //$location.path("/");
            });
        }
    };
    
    BeerFactory.getBeerTypes().then(function(data) {
        //console.log(data);
        $scope.beerTypes = data;
    });
    
}]);