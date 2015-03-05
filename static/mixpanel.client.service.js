'use strict';

/*
    Service for Mixpanel Analytics
    Ignore mixpanel undefined error as mixpanel is defined in the server layout template
*/

angular.module('core').directive( 'goClick', function ( $location ) {
    return function ( scope, element, attrs ) {
        var path;

        attrs.$observe( 'goClick', function (val) {
            path = val;
        });

        element.bind( 'click', function () {
            scope.$apply( function () {
                $location.path( path );
            });
        });
    };
});

angular.module('core').directive( 'goClickExternal', function ( $location ) {
    return function ( scope, element, attrs ) {
        var path;

        attrs.$observe( 'goClickExternal', function (val) {
            path = val;
        });

        element.bind( 'click', function () {
            scope.$apply( function () {
                console.log(path);
                window.open( path );
            });
        });
    };
});

angular.module('core').directive( 'trackButtonClick', function ( $location ) {
    return function ( scope, element, attrs ) {
        var buttonName;

        attrs.$observe( 'trackButtonClick', function (val) {
            buttonName = val;
        });

        element.bind( 'click', function () {
            mixpanel.track('Button Clicked', {
                'Button Name' : buttonName,
                'url' : window.location.pathname
            });
        });
    };
});

angular.module('core').directive( 'trackPageView', function ( $location ) {
    return function ( scope, element, attrs ) {
        var pageName;

        attrs.$observe( 'trackPageView', function (val) {
            pageName = val;
            mixpanel.track('Page Viewed', {
                'Page Name' : pageName,
                'url' : window.location.pathname
            });
        });
    };
});