var rjsmApp = angular.module('rjsmApp', ['uiRouterStyles']);

//Route Definition
rjsmApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
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
                        templateUrl: "views/partial/about-us.html"
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
            .state('services', {
                url: "/services",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/services.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            });
        $urlRouterProvider.otherwise("home");
    }

]).run(['$state', '$rootScope',
    function($state, $rootScope) {
        $rootScope.$on('$stateChangeStart', 
            function(event, toState, fromState) {
                $rootScope.fromState = fromState;
                $rootScope.toState = toState;
                $rootScope.curPage = toState.name;
            }
        );
    }
]);
