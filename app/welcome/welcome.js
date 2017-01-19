'use strict';

angular.module('myApp.welcome', ['ngRoute']).config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'welcome/welcome.html',
            controller: 'View1Ctrl'
        });
    }
]).controller('View1Ctrl', [function($templateCache) {
        $templateCache.removeAll();
    }
]);