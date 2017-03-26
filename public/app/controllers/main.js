app.controller('main', function($scope, config, $routeParams) {
    // side menu items
    $scope.menu_items = config.routes;
});