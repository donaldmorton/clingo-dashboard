var clingoDashboard = angular.module('clingoDashboard', ['ngRoute']);

clingoDashboard.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'logIn/logIn.html',
            controller  : 'logInController'
        })
        .when('/orders', {
            templateUrl : 'home/home.html',
            controller  : 'homeController'
        })
        .when('/drivers', {
            templateUrl : 'driver/driver.html',
            controller  : 'driverController'
        })
        .when('/vans', {
            templateUrl : 'vans/vans.html',
            controller  : 'vansController'
        })
        .otherwise({
            redirectTo: 'logIn/logIn.html'
        });
});
