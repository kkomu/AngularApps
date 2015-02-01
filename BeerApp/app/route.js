'use strict';

mainMod.config(function ($routeProvider) {
    
    $routeProvider.when('/', {
        controller: 'PageOneController',
        templateUrl: './views/page1.html'
    });

});