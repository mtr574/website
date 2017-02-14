/**
 * Controllers
 */
app.controller('main', function($scope, config, $routeParams) {
    $scope.menu_items = config.routes;
});

app.controller('cv_ctrl', function($scope) {
    $scope.cv = {
        headline: {
            title: "netanel (nate) ben",
            sub_title: "full-stack developer & UI/UX enthusiaste"
        },
        contact_info: {
            title: 'contact',
            items: ['netanelbeny@gmail.com', '+972 54 2002744', 'github.com/netanel']
        },
        skills: {
            title: 'skills',
            proficient: {
                title: 'proficient',
                items: ['Ruby (RoR)', 'JavaScript', 'Git']
            },
            comfortable: {
                title: 'comfortable',
                items: ['NodeJS', 'Jade/Pug', 'AngularJS', 'LESS/SASS', 'MySQL']
            },
            familier: {
                title: 'familier',
                items: ['C#', 'ReactJS']
            }
        },
        languages: {
            title: 'languages',
            info: [
                {
                    item: 'English'
                }, {
                    item: 'Hebrew'
                }
            ]
        },
        content: {
            projects: [
                {
                    title: 'Midburn Spark | Regional burn management',
                    description: 'Midburn is the Israeli regional burning-man community. This web-app is an open source project & a solution for camps management and online community.',
                    link: 'github.com/Midburn/Spark'
                }, {
                    title: 'Kino | Theatre managment',
                    description: 'Rav-Hen theatre film manager, a project I started while studied and worked for local theatre branch of the company. The project evolved whiting few months and had a lot of impact on the work-flow of the teathre. The solution was suggested as pro-bono to the company.',
                    link: 'github.com/mtr574/kino'
                }
            ],
            experience: [
                {
                    time: '09/2015—',
                    company: 'Konimbo | ',
                    title: 'Full stack developer (RoR)',
                    notes: ['started as a front-end developer', 'promoted to work in a small team server-side RoR', 'maintane & solving bugs everyday', 'lead my own project of accesibility product for the company']
                }, {
                    time: '2015—2016',
                    company: 'Ruppin College | ',
                    title: 'C# & .NET Teacher Assistant',
                    notes: ['class teacher assistant', 'tests & assignments checker']
                }
            ],
            education: [
                {
                    time: '2015',
                    info: 'Software engineering, Ruppin college',
                    notes: 'emphasis on web developement'
                }
            ]
        }
    }
})

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
