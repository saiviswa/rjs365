rjsmApp.directive('headerMenu', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm.on('click',function(event) {
            	if (elm.is("body")) {
            		$("#header-menu").hide();
            	} else {
	            	$("#header-menu").toggle();
	            }
	            event.stopPropagation();
            });
        }
    };
}]);