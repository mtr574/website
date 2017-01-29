/**
 * Declare app level module which depends on views, and components
 */
app.config(function($routeProvider, $locationProvider, config) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", config.routes.hello)
        .when("/hello", config.routes.hello)
        .when("/blog", config.routes.blog)
        .when("/projects", config.routes.projects)
        .otherwise({
            redirectTo: 'static/404.html'
        });
});
