var rjsmApp = angular.module('rjsmApp', ['uiRouterStyles']);

//Route Definition
rjsmApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/landing.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            })
            .state('about-us', {
                url: "/about-us",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/landing.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            })
            .state('more-about-us', {
                url: "/more-about-us",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/about-us-more.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            })
            .state('facility-management', {
                url: "/facility-management",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/facility-management.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/facility-management.css']
                }
            })
            .state('services', {
                url: "/services",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/landing.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            });
        $urlRouterProvider.otherwise("home");
    }

]).run(['$state', '$rootScope', '$anchorScroll', '$location', '$anchorScroll',
    function($state, $rootScope, $anchorScroll, $location, $anchorScroll) {
        $rootScope.$on('$stateChangeStart', 
            function(event, toState, fromState) {
                $rootScope.fromState = fromState;
                $rootScope.toState = toState;
                $rootScope.curPage = toState.name;
                $anchorScroll($location.hash());
                $anchorScroll.yOffset = 0;          
            }
        );
        $rootScope.$on('$locationChangeSuccess', function(event, newState, oldState) {
            $rootScope.hash = $location.hash();
            $('#slider-div').find('.icn_slider.active').removeClass('active');
            if ($rootScope.hash == '') {
                $('.icn_slider.home').addClass('active');
            } else {
                $('.icn_slider.'+$rootScope.hash).addClass('active');
            }
        });
    }
]);

function vhtopx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    return (y*value)/100;
}