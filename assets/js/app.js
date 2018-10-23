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

$(window).on('scroll', function() {
    $('#scroll-div').hide();
    // $('.home-content').each(function() {
    //     if ($(this).offset().top < window.pageYOffset + 10 
    //         && $(this).offset().top + $(this).height() > window.pageYOffset + 10) {
    //         var hash = '#' + $(this).attr('id');
    //         window.location.hash = hash;
    //         history.replaceState(undefined, undefined, hash);
    //     }
    // });
});

var isScrolling;
window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        $('#scroll-div').show();
    }, 100);
}, false);