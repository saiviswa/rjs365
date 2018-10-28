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
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/fullpage.css']
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

]).run(['$state', '$rootScope', '$location',
    function($state, $rootScope, $location) {
        $rootScope.$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams) {
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
        $rootScope.$on('$viewContentLoaded', function(event) {
            if (typeof $.fn.fullpage.destroy === 'function') {
                $.fn.fullpage.destroy('all');
            }
            if ($('.slider').hasClass('slick-initialized')) {
                $('.slider').slick('destroy');
            } 
            fullPageInit();
            slickInit();
        });
    }
]);

function fullPageInit() {
    $('#fullpage').fullpage({
        anchors: ["/home", "/home#about-us", "/home#more-about-us", "/home#services"],
        sectionSelector: '.home-content',
        scrollingSpeed: 1000,
        onLeave: function(index, nextIndex, direction) {
            $('#scroll-div').hide();
        },
        afterLoad: function(anchorLink, index) {
            $('#scroll-div').show();
        }
    });
}

function slickInit() {
    $('.slider').slick({
        speed: 1000,
        arrows: true,
        prevArrow: $('#img-nav .left'),
        nextArrow: $('#img-nav .right,'),
        useTransform: false
    });
}