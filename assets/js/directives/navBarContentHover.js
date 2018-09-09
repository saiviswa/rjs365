rjsmApp.directive('navBarHeaderContent', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm
                .on('mouseenter',function() {
                    var height = $("#dropdown-menu-nav").outerHeight()-4
                    $("#dropdown-menu-img #nav-img").css("display", "block");
                    elem_id = elm[0].id
                    if (elem_id == 'nav-lgstcs' || elem_id == 'nav-ctrng' || elem_id == 'nav-brndng' || elem_id == 'nav-prprty') {
                        img_src = "assets/images/landing_page/automobile.jpg"
                    } else if ((elem_id == 'nav-mn-pwr' || elem_id == 'nav-hs-kpng' || elem_id == 'nav-scrty' || elem_id == 'nav-plmbng')) {
                        img_src = "assets/images/landing_page/event_management.jpg"
                    } else {
                        img_src = "assets/images/landing_page/facility_management.jpg"
                    }

                    $("#dropdown-menu-img #nav-img").attr({"height": height, "src": img_src});
                })
                .on('mouseleave',function() {
                    $("#dropdown-menu-img #nav-img").attr("src", "");
                    $("#dropdown-menu-img #nav-img").css("display", "none");
                });
        }
    };
}]);