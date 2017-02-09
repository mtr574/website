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
                    title: 'Midburn Spark | ',
                    description: 'Regional burn open source project imply a solution for camps management and online community.',
                    link: 'github.com/Midburn/Spark'
                }, {
                    title: 'Kino | ',
                    description: 'Rav-Hen theatre film manager',
                    link: ''
                }
            ],
            experience: [
                {
                    time: '09/2015—',
                    company: 'Konimbo | ',
                    title: 'Full stack developer (RoR)',
                    notes: ['started as a front-end developer', 'maintenance & bug solving', 'lead developer of accesibility product', 'o']
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
