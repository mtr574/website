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
        blog: {
            name: 'blog',
            href: '/blog',
            templateUrl: 'views/blog.html'
        },
        projects: {
            name: 'projects',
            href: '/projects',
            templateUrl: 'views/projects.html'
        },
        resume: {
            name: 'resume',
            href: '/resume',
            templateUrl: 'views/resume.html'
        }
    }
})