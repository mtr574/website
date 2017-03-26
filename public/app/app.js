var app = angular.module('nate', ['ngRoute']);

app.config(function($routeProvider, $locationProvider, config) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", config.routes.hello)
        .when("/hello", config.routes.hello)
        .when("/resume", config.routes.resume)
        .when("/pres", config.routes.presentations)
        .when("/pods", config.routes.podcasts)
        .when("/mycats", {
            templateUrl: 'views/meow.html'
        })
});