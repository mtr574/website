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
        },
        presentations: {
            name: 'presentations',
            href: '/presentations',
            templateUrl: 'views/pres.html'
        },
        pods: {
            name: 'pods',
            href: '/pods',
            templateUrl: 'views/podcasts.html'
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