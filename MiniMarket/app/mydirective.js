var module = angular.module("mvModule",["ngResource"]);

module.directive("myDirective", function() {
    return {
        restrict: "AEC",
        scope: {
            temp: "@",
            city: "@"
        },
        templateUrl: "./app/mydirective.html",
        controller: "DirectiveController"
    };
    
});

module.controller("DirectiveController", function($scope, $resource) {
    var data = $resource('http://api.openweathermap.org/data/2.5/weather?q="Oulu,fi"').get(function() {
        console.log(data);
        $scope.temp = data.main.temp;
        $scope.city = data.name;
    });
        
});