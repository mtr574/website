var app = angular.module('nate', ['ngRoute']);

// Declare app level module which depends on views, and components
// app.config([
//     '$locationProvider',
//     '$routeProvider',
//     function($locationProvider, $routeProvider) {
//         $locationProvider.hashPrefix('/').html5Mode(true);
//         $routeProvider.when('/', {templateUrl: '/index.html'});
//         $routeProvider.when('/404', {templateUrl: 'static/404.html'});
//         $routeProvider.otherwise({redirectTo: '/404'});
//     }
// ]);

app.controller('main', function($scope) {
    $scope.menu_items = [
        {
            title: 'title',
            link: 'link for this title'
        }
    ]
});

app.directive('mainMenu', function($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/menu.html',
        link: function($scope, $element, $attributes) {}
    };
});
