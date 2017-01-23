/**
 * Controllers
 */
app.controller('main', function($scope, config, $routeParams) {
    $scope.menu_items = config.routes;
});

app.directive('mainMenu', function($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/menu.html',
        link: function($scope, $element, $attributes) {}
    };
});

app.directive('appFooter', function($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/footer.html',
        link: function($scope, $element, $attributes) {}
    };
});

