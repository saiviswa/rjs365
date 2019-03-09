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
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
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
            })
            .state('real-estate', {
                url: "/real-estate",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/real-estate.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/real-estate.css']
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
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: ['assets/css/about-us.css', 'assets/css/main.css']
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

rjsmApp.controller('rjsmController', function($scope) {
    $scope.services = [
        {num: "01", title: "Design and Development", content: "How about mapping the digital transformation journey of your business with your own app in the web and mobile market-places? From mobile apps to web apps to websites to custom software, we've got it all covered! Now, revolutionize the way you engage, interact with and convert your prospects into customers & the way you do business.", 
            link: "#/facility-management"},
        {num: "02", title: "Facility Management", content: "Facility Management  is a multifaceted discipline to ensure the functionality of the built environment by integrating people, place, process and technology. ISS is a global leader in FM and have more than 25 years of experience in this area. In ISS, FM is always provided through a self-delivery model, which we call Integrated Facility Services.", 
            link: "#/facility-management"},
        {num: "03", title: "IT Solutions", content: "RJS365 is a full-service IT Cloud and Facility management services provider specializing in Network Firewalls and servers support, and maintenance.", 
            link: "#/facility-management"},
        {num: "04", title: "Real Estate", content: "A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate. So to make this journey joyful, we build connection with our customers from the start and being there when it matters the most - right from online search to brokers to home  or office space to paperwork to finally finding that perfect one for you.", 
            link: "#/real-estate"},
        {num: "05", title: "Other Services", content: "We also offer wide range of serices like, Interior desings, Event Management, Automobiles and electronics.", 
            link: "#/facility-management"}
    ];

    $scope.aboutUs = [
        {title: "AN OVERVIEW", desc: "We will help you with what we have learnt", 
            subDesc: "RJS 365 is a full-service IT Cloud and Facility management services provider specializing in Network Firewalls and servers support, and maintenance. Right now we support businesses only in Bangalore. We are providing IT management services for Firewall, Network and Server Installations including maintenance and support. Fully qualified and certificated people work with us. We can provide L1, L2, L3 services, support, and design & implement networks. We work with small and medium sized companies. Company ability to work on different projects in term of Qualification and certifications of employees.", 
            imgSrc: "assets/images/about_us/img-about-us.jpg"},
        {title: "WE ARE FRIENDLY", desc: "How we engage customers", 
            subDesc: "We are a bunch of experts holding years and years of experience in services and solutions. Our team is highly knowledgeable and functional to meet any kind of business needs as and when needed. RJS 365 can work in a tight turnaround time and can yet deliver un-compromised quality services. Finest solutions at a competitive rate are what that makes us fit our client’s budget and needs. We believe in overcoming challenges through our specialised values and teamwork spirit.", 
            imgSrc: "assets/images/about_us_more/img-more-about.jpg"}
    ];

    $scope.facilities = [
        {num: "01", title: "Front Office / Receptionist", imgSrc: "assets/images/facility_management/front_office.jpg", 
            content: "We offer highly-skilled and self-motivated front office workers , who will play a key role by performing various administrative and clerical tasks, undertaking a variety of activities in the office, including filing, answering the phone, organizing documents, basic bookkeeping, and more. Reliability and a strong work ethic combined with great communication skills.", 
            secondPage: false},
        
        {num: "02", title: "Security", imgSrc: "assets/images/facility_management/security.jpg", 
            content: "We provide trained security guards to any business establishments, residential apartments, a person or a property.", 
            secondPage: false},
        
        {num: "03", title: "Housekeeping", imgSrc: "assets/images/facility_management/house-keeping.jpg",  
            content: "It's not just about better cleaning, it's about a better overall experience. One that's easy, thorough, and that comes with a great working relationship. So we start with a meeting to determine if our culture is a good fit with your culture and then we help you determine exactly the services you want or need.", 
            secondPage: false},
        
        {num: "04", title: "Electricians", imgSrc: "assets/images/facility_management/electricians.jpg",  
            content: "We have experienced Electricians to undertake a variety of tasks relating to setting up and maintaining electrical infrastructure which will also involve installing electrical wiring in buildings and poles, troubleshooting malfunctions and blackouts and repairing appliances.", 
            secondPage: false},
        
        {num: "05", title: "Pantry & Cafeteria Management", imgSrc: "assets/images/facility_management/pantry.jpg",  
            content: "RJS 365 provides well groomed, skilled and experienced staff for serving food & Beverage in Pantry & cafeteria. Our Pantry & cafeteria staff is not only thoroughly trained for proper table service and F&B Service skills but they are also trained on behavioral skills (i.e. Courtesy, soft spoken-ness etc.) so that the best of service can be provided to our client.", 
            secondPage: false},
        
        {num: "06", title: "Plumber", imgSrc: "assets/images/facility_management/plumber.jpg",  
            content: "We have experienced Plumbers to efficiently undertake a variety of plumbing tasks ranging from fixing leakages to installing pipes and HVAC systems. A successful plumber must have a thorough knowledge of hydraulic systems. They are patient individuals with a practical mind and manual dexterity, able to work efficiently with great attention to detail.", 
            secondPage: false},
        
        {num: "07", title: "Mail Room", imgSrc: "assets/images/facility_management/mailroom.jpg",  
            content: "Our core business revolves around running on-site service centres with mail and logistics, generally providing the hub for service delivery options.", 
            secondPage: false},
        
        {num: "08", title: "Pest Control Management", imgSrc: "assets/images/facility_management/pest.jpg",  
            content: "Timely preventive measures and effective treatment of pests is very essential to maintain the sanctity of the office premises. We not only take all the preventive measures to prevent any kind of infestation of the pests in the office but in any such situation our effective treatments are available to remove any such problem.", 
            secondPage: false},
        
        {num: "09", title: "BMS (Building Management Services)", imgSrc: "assets/images/facility_management/bms.jpg", content: "", secondPage: true},
        
        {num: "10", title: "HVAC (Heating, Ventilation and Air Conditioning)", imgSrc: "assets/images/facility_management/ac.jpg", content: "", secondPage: true},
        
        {num: "11", title: "DG Operations & Maintenance", imgSrc: "assets/images/facility_management/plumber.jpg", content: "", secondPage: true},
        
        {num: "12", title: "Carpentry Lift Operation & Maintenance",  imgSrc: "assets/images/facility_management/carpentry.jpg", content: "", secondPage: true}
    ];

    $scope.realEstate = [
        {title: "BUY OR SELL PROPERTY", desc: "Residential or Commercial? We got both of it covered.", 
            subDesc: "A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate. So to make this journey joyful, we build connection with our customers from the start and being there when it matters the most - right from online search to brokers to home  or office space to paperwork to finally finding that perfect one for you.", 
            imgSrc: "assets/images/real_estate/residential.jpg"},
        {title: "RESIDENTIAL", desc: "Searching for a home has never been this easy", 
            subDesc: "Tired of brokers and searching multiple websites online? Let us know your preferences and we will get back to you with amazing homes with the best deals and will help you throughout each and every process until you get settled in!", 
            imgSrc: "assets/images/real_estate/residential.jpg"},
        {title: "COMMERCIAL", desc: "Looking for a perfect office space to get you going?", 
            subDesc: "Space has the power to transform business—unlocking the potential of people and organizations. Intentional design, warm hospitality, and flexible solutions enable your team to do its best work. Worry not! Give us a call & We’ll get back to you with perfect office spaces that suits your needs.", 
            imgSrc: "assets/images/real_estate/commercial.jpg"}
    ];
});

function fullPageInit() {
    $('#fullpage-home').fullpage({
        anchors: ["/home", "/home#services"],
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