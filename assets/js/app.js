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
            .state('it', {
                url: "/it",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/it.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/it.css']
                }
            })
            .state('event-management', {
                url: "/event-management",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/event-management.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/event-management.css']
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
            })
            .state('clients', {
                url: "/our-clients",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/clients.html"
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
            sliderMenu($rootScope.hash);
            console.log("old state " + oldState);
            console.log("new state " + newState);
        });
        $rootScope.$on('$viewContentLoaded', function(event) {
            if (typeof $.fn.fullpage.destroy === 'function') {
                $.fn.fullpage.destroy('all');
            }
            if ($('.slider').hasClass('slick-initialized')) {
                $('.slider').slick('destroy');
            }
            $rootScope.hash = $location.hash();
            fullPageInit();
            slickInit();
            sliderMenu($rootScope.hash);
        });
    }
]);

rjsmApp.controller('rjsmController', function($scope) {
    $scope.services = [
        {num: "01", title: "Facility Management", content: "Facility Management is a multifaceted discipline to ensure the functionality of the built environment by integrating people, place, process and technology.", 
            link: "#/facility-management"},
        {num: "02", title: "Event Management", content: "We are obsessive about organization, aesthetic presentation and spend endless hours on planning each and every aspect of your event such as Weddings, celebrations, corporate events, expos, road shows etc.,", 
            link: "#/event-management"},
        {num: "03", title: "IT Solutions", content: "RJS365 is a full-service IT Cloud and Facility management services provider specializing in Network Firewalls and servers support, and maintenance.", 
            link: "#/it"},
        {num: "04", title: "Real Estate", content: "A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.", 
            link: "#/real-estate"},
        {num: "05", title: "Other Services", content: "We also offer wide range of services like Interior designs, Automobiles and Electronics.", 
            link: ""}
    ];

    $scope.aboutUs = [
        {title: "AN OVERVIEW", desc: "We will help you with what we have learnt", 
            subDesc: "RJS365​ is a full-service IT Cloud and Facility management services provider specializing in Network Firewalls and servers support, and maintenance. Right now we support businesses only in Bangalore. We are providing IT management services for Firewall, Network and Server Installations including maintenance and support. Fully qualified and certificated people work with us. We can provide L1, L2, L3 services, support, and design & implement networks. We work with small and medium sized companies. Company ability to work on different projects in term of Qualification and certifications of employees.", 
            imgSrc: "assets/images/about_us/img-about-us.jpg"},
        {title: "WE ARE FRIENDLY", desc: "How we engage customers", 
            subDesc: "We are a bunch of experts holding years and years of experience in services and solutions. Our team is highly knowledgeable and functional to meet any kind of business needs as and when needed. RJS 365 can work in a tight turnaround time and can yet deliver un-compromised quality services. Finest solutions at a competitive rate are what that makes us fit our client’s budget and needs. We believe in overcoming challenges through our specialised values and teamwork spirit.", 
            imgSrc: "assets/images/about_us_more/img-more-about.jpg"}
    ];

    $scope.facilities = [
        {num: "01", title: "Front Office / Receptionist", imgSrc: "assets/images/facility_management/front_office.jpg", 
            content: "We offer highly-skilled and self-motivated front office workers, who will play a key role by performing various administrative and clerical tasks, undertaking a variety of activities in the office, including filing, answering the phone, organizing documents, basic bookkeeping, and more. Reliability and a strong work ethic combined with great communication skills.", 
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
        
        // {num: "09", title: "BMS (Building Management Services)", imgSrc: "assets/images/facility_management/bms.jpg", 
        //     content: "A building management service (BMS) buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, Lighting, Power Systems, fire systems, and Security Systems.A BMS consists of software and hardware; the software program, Vendors are also producing a BMS that integrates the use of Internet Protocols.", 
        //     secondPage: true},
        
        {num: "09", title: "Carpentry Lift Operation & Maintenance",  imgSrc: "assets/images/facility_management/carpentry.jpg", 
            content: "We aware that the customers/clients that it is necessary to know your requirements thoroughly. This helps us to create unique and stunning designs on woodworks and we provide services are at is custom-made to your exact required specifications. From initial designing, creating and fitting, our expert carpenter will take care of woodwork that looks great and is long-lasting. We can also provide a free, no-obligation quote.", 
            secondPage: false}
    ];

    $scope.itFacilities = [
        {num: "01", title: "Managed Cloud Services", imgSrc: "", 
            content: "18/6 Support, Hosted Servers and Desktops, Email Security and Business Continuity, Managed Anti-Virus Cloud Storage and Backup.", 
            secondPage: false},
        
        {num: "02", title: "MIS & Cloud Services", imgSrc: "", 
            content: "We provide IT infrastructure/email/firewall support and other IT solutions based on open source to various corporate clients across the world. We believe that open source is the best way to serve clients and society providing a true value services on a platform that blends into their setup of diverse natures and requirements.", 
            secondPage: false},
        
        {num: "03", title: "Firewall Solutions", imgSrc: "",  
            content: "Network Address Translation (NAT), High Availability, Multi-WAN, Server Load Balancing,Virtual Private Network (VPN): IPsec, OpenVPN, PPTP Server, PPPoE Server, Reporting and Monitoring : RRD Graphs, Dynamic DNS, Captive Portal, DHCP Server and Relay and much more", 
            secondPage: false},
        
        {num: "04", title: "Manage Infrastructure Service (MIS) - IT Services", imgSrc: "",  
            content: "IT Services - On-site, On-Call and Remote Support 24/7/365 system monitoring and 12/6 Remote Support Network analysis, Network security and Infrastructure planning, Backup & Disaster Recovery, IT procurement Server, Network and Desktop deployments Visualization (Server/Desktop), Data migration, IT Asset Management", 
            secondPage: false},
        
        {num: "05", title: "Email & Collaboration Services (Private, Cloud, In House)", imgSrc: "",  
            content: "Communicate with your teams effectively using the latest in Email Services like Zimbra. Shared group lists, distribution schemes and streamlined emailing software will all assist in making your business more efficient. Our email collaboration tools and suite is purposely utilized by all types of businesses due to it's versatile approach to streamlining mail.", 
            secondPage: false},
        
        {num: "06", title: "IT Installations & Migration", imgSrc: "",  
            content: "Making changes to your IT systems doesn't need to be a major headache - allow IT Outcomes to organize and implement everything for you, from the infrastructure to checking everything works at the end of the project.", 
            secondPage: false},
        
        {num: "07", title: "Network & Security", imgSrc: "",  
            content: "18/6 Support, Hosted Servers and Desktops, Email Security and Business Continuity, Managed Anti-Virus Cloud Storage and Backup.", 
            secondPage: false},
        
        {num: "08", title: "Visualization Services", imgSrc: "",  
            content: "In the current very hard climate of budget constraints and streamlining of every organization operational running costs, VMWare is a fantastic tool offering a wide range of user cost savings and benefits. With a virtual infrastructure a System Administrator gains the advantage of managing pooled resources across the entire organization, allowing their IT managers to be more responsive to dynamic operational needs.", 
            secondPage: false}
    ];

    $scope.realEstate = [
        {title: "BUY OR SELL PROPERTY", desc: "Residential or Commercial? We got both of it covered.", 
            subDesc: "A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate. So to make this journey joyful, we build connection with our customers from the start and being there when it matters the most - right from online search to brokers to home  or office space to paperwork to finally finding that perfect one for you.", 
            imgSrc: "assets/images/real_estate/buy-sell.jpg"},
        {title: "RESIDENTIAL", desc: "Searching for a home has never been this easy", 
            subDesc: "Tired of brokers and searching multiple websites online? Let us know your preferences and we will get back to you with amazing homes with the best deals and will help you throughout each and every process until you get settled in!", 
            imgSrc: "assets/images/real_estate/residential.jpg"},
        {title: "COMMERCIAL", desc: "Looking for a perfect office space to get you going?", 
            subDesc: "Space has the power to transform business-unlocking the potential of people and organizations. Intentional design, warm hospitality, and flexible solutions enable your team to do its best work. Worry not! Give us a call & We'll get back to you with perfect office spaces that suits your needs.", 
            imgSrc: "assets/images/real_estate/commercial.jpg"}
    ];

    $scope.eventFacilities = [
        {num: "01", title: "Wedding Events", imgSrc: "assets/images/event_management/wedding.jpg", 
            content: "Our approach to wedding design is sophisticated, personal, and highly attentive. After all, we want planning your wedding to be half the fun. We work closely with our brides and grooms to put together unforgettable moments.", 
        },
        
        {num: "02", title: "Birthdays", imgSrc: "assets/images/event_management/birthday.jpg", 
            content: "All you have to do is be the supermom or superdad that trusts our experts and pampers their child with the most creative birthday party games, jolly birthday party decorations and fun-filled birthday party themes.", 
        },
        
        {num: "03", title: "Corporate Events", imgSrc: "assets/images/event_management/corporate.jpg",  
            content: "We believe your need to promote your brand, motivate employees or market your product. We plan conceptualized event and implement meetings, communicate your business or sales strategy in the most motivational environment with the show makers.", 
        },
        
        {num: "04", title: "Catering", imgSrc: "assets/images/event_management/catering.jpg",  
            content: "Food and entertainment have always been essential ingredients of every occasion that calls for a celebration. Our expertise in these two areas, through our catering and event management services, forms the essence of our name 'Celebrations'.", 
        },
        
        {num: "05", title: "Event Photographers", imgSrc: "assets/images/event_management/event-photographers.jpg",  
            content: "Offers a dynamic range of professional event photography services. Enquire us Today to get in all the details required for your Special Events.", 
        }
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
            if (index == 1) {
                $('#scroll-div').show();
            }
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

function sliderMenu(hash) {
    $('#slider-div').find('.icn_slider.active').removeClass('active');
    if (hash == '') {
        $('.icn_slider.home').addClass('active');
    } else {
        $('.icn_slider.'+hash).addClass('active');
    }
}