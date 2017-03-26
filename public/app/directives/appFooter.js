app.directive('appFooter', function($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/templates/footer.html',
        link: function($scope, $element, $attributes) {}
    };
});