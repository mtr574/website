/**
 * Controllers
 */
app.controller('main', function($scope, config, $routeParams) {
    $scope.menu_items = config.routes;
});

app.controller('meow', function($scope) {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.now(),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id),
            daysSpan = clock.querySelector('.days');

        function updateClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // count down timer:
    var date = "11-11-2017",
        deadline = new Date(date);
    initializeClock('clockdiv', deadline);
})

app.controller('cv_ctrl', function($scope) {
    $scope.cv = {
        headline: {
            title: "netanel (nate) ben",
            sub_title: "full-stack developer & UI/UX enthusiaste"
        },
        contact_info: {
            title: 'contact',
            items: ['netanelbeny@gmail.com', '+972 54 2002744', 'github.com/mtr574']
        },
        skills: {
            title: 'skills',
            proficient: {
                title: 'proficient',
                items: ['Ruby-on-Rails', 'JavaScript', 'Git']
            },
            comfortable: {
                title: 'comfortable',
                items: ['NodeJS', 'AngularJS', 'LESS/SASS', 'MySQL', 'NoSQL', 'Linux']
            },
            familier: {
                title: 'familier',
                items: ['C#', 'ReactJS']
            }
        },
        languages: {
            title: 'languages',
            info: [{
                item: 'English'
            }, {
                item: 'Hebrew'
            }]
        },
        content: {
            projects: [{
                title: 'Midburn Spark - Regional burn web-app | ExpressJS, AngularJS, MySQL',
                description: 'Midburn is the Israeli regional burning-man community and this app is an open source project delivers a solution for camps management and online community. My role in this project is lead developer on the camps module.',
                link: 'github.com/Midburn/Spark'
            }, {
                title: 'Kino - Cinema workers web-app | C#, ASP.Net, MySQL',
                description: 'Rav-Hen cinema workers management app is a project I authored during college studies and worked for local theatre branch of the company. The project evolved within few months and had a lot of impact on the cinema work-flow. The solution was delivered pro-bono to the company.',
                link: 'github.com/mtr574/kino'
            }],
            experience: [{
                time: '09/2015—',
                company: 'Konimbo - E-commerce platform | Ruby-on-Rails, MySQL',
                title: 'Full-Stack Developer',
                notes: ['Started as a front-end developer implementing various of HTML5, CSS3 & JS components to a full online shop. During the time I lead-dev a project of JS accesibility-tool product implementing WAI-ARIA rules. After a year transfered to server-side working on the platform including maintenance, writing integrations and external-use API.']
            }, {
                time: '2015—2016',
                company: 'Ruppin College - Academic staff',
                title: 'C#, ASP.Net Teacher Assistant',
                notes: ['Worked as class teacher assistant - 2 weekly hours assisting students studying C# and ASP.Net', 'During this period my second role was tests & assignments checker']
            }],
            education: [{
                time: '2015',
                info: 'Software engineering, Ruppin college',
                notes: 'emphasis on web developement'
            }]
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
