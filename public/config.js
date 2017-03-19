var app = angular.module('nate', ['ngRoute']);
/**
 * Configuration
 */
app.constant('config', {
    routes: {
        hello: {
            name: 'hello',
            href: '/hello',
            templateUrl: 'views/hello.html'
        },
        resume: {
            name: 'resume',
            href: '/resume',
            templateUrl: 'views/resume.html'
        }
        // projects: {
        //     name: 'projects',
        //     href: '/projects',
        //     templateUrl: 'views/projects.html'
        // },
        // lostnfound: {
        //     name: 'lostnfound',
        //     href: '/lostnfound',
        //     templateUrl: 'views/lostnfound.html'
        // }
    }
})