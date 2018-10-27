rjsmApp.directive('serviceHover', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm
                .on('mouseenter',function() {
                    elm.addClass("active");
                })
                .on('mouseleave',function() {
                    elm.removeClass("active");
                });
        }
    };
}]);