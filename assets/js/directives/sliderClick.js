rjsmApp.directive('sliderClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm.on('click',function(event) {
            	if (this.hash !== "") {
                    event.preventDefault();
                    var len = this.hash.split('#').length;
                    if (len > 0 && this.hash.split('#')[len-1] != '') {
                        var curHash = this.hash;
                        var hash = '#' + curHash.split('#')[len-1];
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 800, function() {
                            window.location.hash = hash;
                            if (hash !== '#home') {
                                history.replaceState(undefined, undefined, curHash);
                            }
                        });
                    }
                }
            });
        }
    };
}]);