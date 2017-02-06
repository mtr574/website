/**
 * Declare app level module which depends on views, and components
 */
app.config(function($routeProvider, $locationProvider, config) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", config.routes.hello)
        .when("/hello", config.routes.hello)
        .when("/resume", config.routes.resume)
        .when("/projects", config.routes.projects)
        .when("/lostnfound", config.routes.lostnfound)
        .otherwise({
            redirectTo: 'static/404.html'
        });
});
