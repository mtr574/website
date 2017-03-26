app.controller('resume', function($scope) {
    $scope.cv = {
        headline: {
            title: "Netanel (Nate) Benyoram",
            sub_title: "Full-Stack Developer, UI/UX passionate"
        },
        contact_info: {
            title: 'contact info',
            items: ['netanelbeny@gmail.com', '+972 54 2002744', 'github.com/mtr574', 'facebook.com/netanelben', 'Herzliya, ISRAEL']
        },
        skills: {
            title: 'tech skills & langs',
            proficient: {
                title: 'proficient',
                items: ['Ruby-on-Rails', 'JavaScript', 'Git']
            },
            comfortable: {
                title: 'comfortable',
                items: ['NodeJS', 'AngularJS', 'LESS/SASS', 'MySQL/NoSQL', 'Linux']
            },
            familier: {
                title: 'familier',
                items: ['NPM', 'Pug/Jade/JSX', 'TravisCI', 'C#/ASP.Net', 'ReactJS']
            }
        },
        languages: {
            title: 'human languages',
            info: [{
                item: 'English'
            }, {
                item: 'Hebrew'
            }]
        },
        content: {
            projects: [{
                title: 'Midburn Spark - suite of services that composes everything required to run a burn event throughout the year',
                stack: 'Node & ExpressJS, AngularJS, MySQL',
                description: 'Midburn is the Israeli regional burning-man community and this app is an open source project delivers a solution for camps management, queue & ticket sales system, online marketing community and many more. My role as a lead developer in this project is to bring online a tailore made camps management module.',
                link: 'github.com/Midburn/Spark'
            }, {
                title: 'Kino - Cinema workers web-app',
                stack: 'C#, ASP.Net, MySQL',
                description: 'Rav-Hen cinema workers management app is a project I authored during college studies and worked for local theatre branch of the company. The project evolved within few months and had a lot of impact on the cinema work-flow. The solution was delivered pro-bono to the company.',
                link: 'github.com/mtr574/kino'
            }],
            experience: [{
                time: '09/2015—',
                company: 'Konimbo - E-commerce platform',
                title: 'Full-Stack Developer | Ruby-on-Rails, MySQL',
                notes: ['My first role as front-end developer, implementing various of HTML5, CSS3 & JS components to a full online shop. During the time I lead & developed accesibility-tool, companies second main product, implementing WAI-ARIA rules. After a year transfered to server-side working on the platform including: R&D new features, maintenance, writing integrations and external-use API.']
            }, {
                time: '2015—2016',
                company: 'Ruppin College - Academic staff',
                title: 'C#, ASP.Net Teacher Assistant',
                notes: ['As graduated student been chosen to work as class teacher assistant, writing C#, ASP.Net, HTML & JS - home and class assignments. 2 weekly hours assisting students in class practicing OOP programming, tests & home assignments checker.']
            }],
            education: [{
                time: '2012—2015',
                info: 'Software engineering, Ruppin college',
                notes: 'emphasis on web developement'
            }]
        }
    }
})