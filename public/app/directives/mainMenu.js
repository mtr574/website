app.directive('mainMenu', function($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/templates/menu.html',
        link: function($scope, $element, $attributes) {}
    };
});