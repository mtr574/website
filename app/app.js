var app = angular.module('nate', ['ui.router']);

// Declare app level module which depends on views, and components
app.config(function($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        },
        aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        },
        page404 = {
            name: '404',
            url: '/404',
            templateUrl: 'static/404.html'
        }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});

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
