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
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    },
                    "landingView": {
                        templateUrl: "views/partial/landing.html"
                    },
                    "servicesView": {
                        templateUrl: "views/partial/services.html"
                    },
                    "clientsView": {
                        templateUrl: "views/partial/clients.html"
                    },
                    "teamView": {
                        templateUrl: "views/partial/team.html"
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
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
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
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
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
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
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
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/event-management.css']
                }
            })
            .state('automobiles', {
                url: "/automobiles",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/automobiles.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/automobiles.css']
                }
            })
            .state('interior-design', {
                url: "/interior-design",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/interior-design.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/interior-design.css']
                }
            })
            .state('electronics', {
                url: "/electronics",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/electronics.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/electronics.css']
                }
            })
            .state('contact', {
                url: "/contact-us",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/contact.html"
                    },
                    "hamburgerView": {
                        templateUrl: "views/partial/hamburger.html"
                    }
                },
                data: {
                    css: ['assets/css/main.css', 'assets/css/contact.css']
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
        {num: "02", title: "IT Solutions", content: "RJS365 is a full-service IT Cloud and Facility management services provider specializing in Network Firewalls and servers support, and maintenance.", 
            link: "#/it"},
        {num: "03", title: "Electronics", content: "We specialize in sales and services for all kind of brands; Laptops, PC & Mobile phones", 
            link: "#/electronics"},
        {num: "04", title: "Real Estate", content: "We make finding home joyful, we build connection with our customers from the start and being there when it matters the most - right from online search to brokers to home  or office space to paperwork to finally finding that perfect one for you.", 
            link: "#/real-estate"},
        {num: "05", title: "Automobiles", content: "We also provide services for Automobiles; Sales & Services", 
            link: "#/automobiles"},
        {num: "06", title: "Event Management", content: "We are obsessive about organization, aesthetic presentation and spend endless hours on planning each and every aspect of your event such as Weddings, celebrations, corporate events, expos, road shows etc.,", 
            link: "#/event-management"},
        {num: "07", title: "Interior Design", content: "Curate your experience with our innovative designs.", 
            link: "#/interior-design"}
    ];

    $scope.aboutUs = [
        {title: "AN OVERVIEW", desc: "We will help you with what we have learnt", 
            subDesc: "RJS365 is a full service for all your day to day office needs in Facility Management, IT Cloud Solutions, Electronics, Real Estate, Interior and Automobiles etc,,,.Solutions. We have specialising in all the above services with fully qualified and certificated resources in our organisations who work with us. We can provide in various levels of resources like L1,L2 and L3 Services, Support and design and implement on all your needs, We work with small and medium sized companies. Company ability to work on different projects in term of Qualification and certifications of employees.", 
            imgSrc: "assets/images/about_us/img-about-us.jpg"},
        {title: "WE ARE FRIENDLY", desc: "How we engage customers", 
            subDesc: "We are a bunch of experts holding years and years of experience in services and solutions. Our team is highly knowledgeable and functional to meet any kind of business needs as and when needed. RJS 365 can work in a tight turnaround time and can yet deliver un-compromised quality services. Finest solutions at a competitive rate are what that makes us fit our client's budget and needs. We believe in overcoming challenges through our specialised values and teamwork spirit.", 
            imgSrc: "assets/images/about_us_more/img-more-about.jpg"}
    ];

    $scope.facilities = [
        {num: "01", title: "Admin / Front Office / Receptionist", imgSrc: "assets/images/facility_management/front_office.jpg", 
            content: "We Offer Highly-Skilled and self-motivated resources of Admin/Receptionist, who will play a key role by performing various administrative and front offie management and clerical task, undertaking a variety of activities in the facility/office management, visitor Management, vendor management, including filing, answering the phone calls, and organising documentations as per government /company policies and more. Reliability and a strong work ethic combined with great communication skills.", 
            secondPage: false},
        
        {num: "02", title: "Security", imgSrc: "assets/images/facility_management/security.jpg", 
            content: "We have a dedicated team of professionals who are highly talented and well experienced in providing effective guarding solutions. Our Security services in Bengaluru to all Business establishments and Apartments. We are specialised in providing high-end security guard services for all sectors such as Corporate, Hotels, Malls, Manufacturing, Hospitality, IT, Residential, Education, banks, financial institutions etc...", 
            secondPage: false},
        
        {num: "03", title: "Housekeeping Services", imgSrc: "assets/images/facility_management/house-keeping.jpg",  
            content: "It's not just about better cleaning, it's about a better overall experience. One that's easy, thorough, and that comes with a great working relationship. So we start with a meeting to determine if our culture is a good fit with your culture and then we help you determine exactly the services you want or need.", 
            secondPage: false},
        
        {num: "04", title: "Electricians", imgSrc: "assets/images/facility_management/electricians.jpg",  
            content: "We have experienced Electricians to undertake a variety of tasks relating to setting up and maintaining electrical infrastructure which will also involve installing electrical wiring in buildings and poles, troubleshooting malfunctions and blackouts and repairing appliances.", 
            secondPage: false},

        {num: "05", title: "A/C Maintenance services", imgSrc: "assets/images/facility_management/ac.jpg",  
            content: "Feeling the heat and getting frustrated? Our core business revolves around running on-site service centres.", 
            secondPage: false},

        {num: "06", title: "Mail Room", imgSrc: "assets/images/facility_management/mailroom.jpg",  
            content: "Our core business revolves around running on-site service centres with mail and logistics, generally providing the hub for service delivery options.", 
            secondPage: false},

        {num: "07", title: "Carpentry Lift Operation & Maintenance",  imgSrc: "assets/images/facility_management/carpentry.jpg", 
            content: "We create unique and stunning designs on woodworks and we provide services are at is custom-made to your exact required specifications. From initial designing, creating and fitting, our expert carpenter will take care of woodwork that looks great and is long-lasting.", 
            secondPage: false},

        {num: "08", title: "Plumber", imgSrc: "assets/images/facility_management/plumber.jpg",  
            content: "We have experienced Plumbers to efficiently undertake a variety of plumbing tasks ranging from fixing leakages to installing pipes and HVAC systems. A successful plumber must have a thorough knowledge of hydraulic systems. They are patient individuals with a practical mind and manual dexterity, able to work efficiently with great attention to detail.", 
            secondPage: false},
            
        {num: "09", title: "Pantry & Cafeteria Management", imgSrc: "assets/images/facility_management/pantry.jpg",  
            content: "RJS 365 provides well groomed, skilled and experienced staff for serving food & Beverage in Pantry & cafeteria. Our Pantry & cafeteria staff is not only thoroughly trained for proper table service and F&B Service skills but they are also trained on behavioral skills (i.e. Courtesy, soft spoken-ness etc.) so that the best of service can be provided to our client.", 
            secondPage: false},
        
        {num: "10", title: "Pest Control Management", imgSrc: "assets/images/facility_management/pest.jpg",  
            content: "Timely preventive measures and effective treatment of pests is very essential to maintain the sanctity of the office premises. We not only take all the preventive measures to prevent any kind of infestation of the pests in the office but in any such situation our effective treatments are available to remove any such problem.", 
            secondPage: false},

        {num: "11", title: "Office Supplies", imgSrc: "assets/images/facility_management/office.jpg",  
            content: "By the use of technology allows us to dramatically reduce our overheads, negotiate the best possible prices from the manufacturers & distributors. We are passing the benefits of these massive savings directly to our customers like you. You will always find our prices cheaper than anyone else in the market.", 
            secondPage: false},

        {num: "12", title: "Corporate Gifting", imgSrc: "assets/images/facility_management/gifting.jpg",  
            content: "Best design, unparalleled price and quality products equipped with the world class customer service/support. We help you strengthen your business relationship pioneering a different, customized model of corporate gifting. ", 
            secondPage: false},
    ];

    $scope.itFacilities = [
        {num: "01", title: "Managed Cloud Services", imgSrc: "", 
            content: "18/6 Support, Hosted Servers and Desktops, Email Security and Business Continuity, Managed Anti-Virus Cloud Storage and Backup."
        },
        
        {num: "02", title: "MIS & Cloud Services", imgSrc: "", 
            content: "We provide IT infrastructure/email/firewall support and other IT solutions based on open source to various corporate clients across the world. We believe that open source is the best way to serve clients and society providing a true value services on a platform that blends into their setup of diverse natures and requirements."
        },
        
        {num: "03", title: "Firewall Solutions", imgSrc: "",  
            content: "Network Address Translation (NAT), High Availability, Multi-WAN, Server Load Balancing,Virtual Private Network (VPN): IPsec, OpenVPN, PPTP Server, PPPoE Server, Reporting and Monitoring : RRD Graphs, Dynamic DNS, Captive Portal, DHCP Server and Relay and much more"
        },
        
        {num: "04", title: "Manage Infrastructure Service (MIS) - IT Services", imgSrc: "",  
            content: "IT Services - On-site, On-Call and Remote Support 24/7/365 system monitoring and 12/6 Remote Support Network analysis, Network security and Infrastructure planning, Backup & Disaster Recovery, IT procurement Server, Network and Desktop deployments Visualization (Server/Desktop), Data migration, IT Asset Management"
        },
        
        {num: "05", title: "Email & Collaboration Services (Private, Cloud, In House)", imgSrc: "",  
            content: "Communicate with your teams effectively using the latest in Email Services like Zimbra. Shared group lists, distribution schemes and streamlined emailing software will all assist in making your business more efficient. Our email collaboration tools and suite is purposely utilized by all types of businesses due to it's versatile approach to streamlining mail."
        },
        
        {num: "06", title: "IT Installations & Migration", imgSrc: "",  
            content: "Making changes to your IT systems doesn't need to be a major headache - allow IT Outcomes to organize and implement everything for you, from the infrastructure to checking everything works at the end of the project."
        },
        
        {num: "07", title: "Network & Security", imgSrc: "",  
            content: "18/6 Support, Hosted Servers and Desktops, Email Security and Business Continuity, Managed Anti-Virus Cloud Storage and Backup."
        },
        
        {num: "08", title: "Visualization Services", imgSrc: "",  
            content: "In the current very hard climate of budget constraints and streamlining of every organization operational running costs, VMWare is a fantastic tool offering a wide range of user cost savings and benefits. With a virtual infrastructure a System Administrator gains the advantage of managing pooled resources across the entire organization, allowing their IT managers to be more responsive to dynamic operational needs."
        }
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

    $scope.automobiles = [
        {title: "FIND THE BEST DEALS", desc: "We also provide services for Automobiles; Sales & Services", 
        subDesc: "Look no further, with our wide network we can offer you a deal like no one else on used cars and as well as get you the best mechanic to maintain the car in top condition.", 
        secondPage: false, imgSrc: "assets/images/automobiles/img.jpg"
        },
        {title: "BUY PRE-OWNED CARS", desc: "Looking for the perfect car to match your needs?", 
        subDesc: "Tired of searching through different websites to get the car you like? And after the tedious process, get a mechanic to check if the car is in good condition? Well, that's where we come in - We give you the best deals on wide range of TOP condition cars for you to choose from and also check the car for any mechanical problems and such.", 
        secondPage: false, imgSrc: "assets/images/automobiles/img1.jpg"
        },
        {title: "SELL USED CARS", desc: "Want to make a switch to a new car?", 
        subDesc: "Got bored of riding the same car for years and want to make a switch but afraid that you might get lower costs? Look no further - We will get you the best deal in the market for your precious car.", 
        secondPage: false, imgSrc: "assets/images/automobiles/img2.jpg"
        },
        {title: "SERVICING", desc: "Maintaining cars has never been this easy", 
        subDesc: "We have contacts with the best mechanics with affordable prices to get your car back in top condition!", 
        secondPage: false, imgSrc: "assets/images/automobiles/img3.jpg"
        },
        {title: "BUY PRE-OWNED BIKES", desc: "Looking for a sense of freedom which you don't get in car?", 
        subDesc: "With our network, you can get the beloved bike that you desire and what else? Yes, along with the best deal that you can possibly get.", 
        secondPage: true, imgSrc: "assets/images/automobiles/img4.jpg"
        }
    ];

    $scope.interiorDesigns = [
        {title: "INTERIOR DESIGN", desc: "Curate your experience with our innovative designs.", 
        subDesc: "We are dedicated to getting to know you to carefully consider the smallest details. Through a collaborative process, we engage with clients on a personal level and aim to craft a custom experience.", 
        imgSrc: "assets/images/interior_design/img.jpg", hasList: false
        },
        {title: "A CUSTOM HOME, FOR A CUSTOM YOU.", desc: "Crafting interiors to its finest.", 
        subDesc: "We are passionate about crafting. Whether your project is of a construction nature or you are in the stages of furnishing, we would craft your space through the finest details ever.", 
        imgSrc: "assets/images/interior_design/img1.jpg", hasList: true
        },
        {title: "CLASSY, CORPORATE", desc: "Beautifully crafted space, for the classy you.", 
        subDesc: "Whether your space is administrative, executive or office floor plan, we drive to help you meet your requirements.", 
        imgSrc: "assets/images/interior_design/img2.jpg", hasList: false
        }
    ];

    $scope.electronicFacilities = [
        {num: "01", title: "Patient, Friendly Advisors", imgSrc: "assets/images/electronics/img.jpg", 
        content: "It's a little bit like visiting a doctor. Don't you like it when your doctor has an understanding ear, and explains the ailment to you?"
        },
        
        {num: "02", title: "Quality parts, Warranty", imgSrc: "assets/images/electronics/img1.jpg", 
        content: "We use only the highest quality spare parts. All repairs carry a min. 90 days warranty. Not just a working device, peace of mind is paramount too!"
        },
        
        {num: "03", title: "Skilled, Certified technicians", imgSrc: "assets/images/electronics/img2.jpg", 
        content: "All things considered, the quality of service is only as good as the expertise of the repairman. Workmanship matters!"
        },
        
        {num: "04", title: "Doorstep Service", imgSrc: "assets/images/electronics/img3.jpg", 
        content: "Traffic is bad, we know, the hassle. We have free* doorstep service, and free* pickup & drop options. Don't leave home!"
        },
        
        {num: "05", title: "All Repairs Under One Roof", imgSrc: "assets/images/electronics/img4.jpg", 
        content: "All Brand devices, all repairs, we are your one-stop shop. We're probably the only one in town who do L4 chip-level repair on Logic boards, arguably :)"
        }
    ];

    $scope.sliderMenu = [
        {num: "01", class: "icn_slider home", src: "#/home", ngClass: "{'active' : curPage == 'home' && hash == ''}"},
        {num: "02", class: "icn_slider about-us", src: "#/home#about-us", ngClass: "{'active' : curPage == 'about-us'}"},
        {num: "03", class: "icn_slider services", src: "#/home#services", ngClass: "{'active' : curPage == 'services'}"},
        {num: "04", class: "icn_slider clients", src: "#/home#clients", ngClass: "{'active' : curPage == 'clients'}"},
        {num: "05", class: "icn_slider team", src: "#/home#team", ngClass: "{'active' : curPage == 'team'}"}
    ];

    $scope.clients = [
        {imgSrc: "assets/images/clients/image.png"},
        {imgSrc: "assets/images/clients/image3.jpg"},
        {text: "itbrainy"},
        {imgSrc: "assets/images/clients/image2.jpg"}
    ];

    $scope.hamburgerMenu = [
        {ngClass: "{'active' : curPage == 'facility-management'}", src: "#/facility-management", text: "Facility Management", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'it'}", src: "#/it", text: "IT Solutions", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'real-estate'}", src: "#/real-estate", text: "Real Estate", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'electronics'}", src: "#/electronics", text: "Electronics", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'interior-design'}", src: "#/interior-design", text: "Interior Design", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'automobiles'}", src: "#/automobiles", text: "Automobiles", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'event-management'}", src: "#/event-management", text: "Event Management", bottomMenu: false},
        {ngClass: "{'active' : curPage == 'about-us'}", src: "#/home#about-us", text: "About", bottomMenu: true},
        {ngClass: "{'active' : curPage == 'clients'}", src: "#/home#clients", text: "Clients", bottomMenu: true},
        {ngClass: "{'active' : curPage == 'contact-us'}", src: "#/contact-us", text: "Contact Us", bottomMenu: true}
    ];

    $scope.sliderImages = [
        "assets/images/landing_page/img.jpg",
        "assets/images/about_us/img-about-us.jpg",
        "assets/images/about_us_more/img-more-about.jpg"
    ];

    $scope.teamMembers = [
        {name: "Sagaya Stephen", designation: "FOUNDER CEO | SERVICES", imgSrc: "assets/images/team/ceo.jpg"},
        {name: "Michael Paul J", designation: "OPERATION MANAGER", imgSrc: "assets/images/team/ops.jpg"},
        {name: "Edwin", designation: "DEV OPS & IT", imgSrc: "assets/images/team/ceo.jpg"},
        {name: "Sai Viswanathan", designation: "ENGINEER", imgSrc: "assets/images/team/ceo.jpg"},
        {name: "Cryssac Franson Aldo", designation: "CREATIVE DESIGN HEAD", imgSrc: "assets/images/team/ceo.jpg"},
        {name: "Kevin John", designation: "PRODUCT DESIGNER", imgSrc: "assets/images/team/designer.jpg"},
        {name: "Vineeth Kumar", designation: "ENGINEER", imgSrc: "assets/images/team/ceo.jpg"},
        {name: "Vinoth Pandian", designation: "ENGINEER", imgSrc: "assets/images/team/ceo.jpg"}
    ];
});

function fullPageInit() {
    $('#fullpage-home').fullpage({
        anchors: ["/home", "/home#about-us", "/home#about-us", "/home#services", "/home#clients", "/home#team"],
        sectionSelector: '.home-content',
        scrollingSpeed: 1000,
        normalScrollElements: '#footer-content',
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
        useTransform: false,
        autoplay: true
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