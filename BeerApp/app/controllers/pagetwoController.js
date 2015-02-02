'use strict';

mainMod.controller("PageTwoController", ['$scope', 'BeerFactory', function($scope, BeerFactory) {
   
    $scope.beerList = {};
    
    BeerFactory.getBeerList().then(function(data) {
        //console.log(data);
        $scope.beerList = data;
        console.log("Beerlist:");
        console.log($scope.beerList);
   });
    
}]);