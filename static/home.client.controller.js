'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$animate', '$location', 'EmailService',
    function($scope, Authentication, $animate, $location, EmailService) {

        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.myInterval = 5000;

        $scope.slides = [{
            comment: '"Technology firms are often unable to find the skills they need. Andela promises to give companies access to previously untapped talent while creating an on-ramp to the digital economy for brilliant young people."',
            image: 'ChrisHughes.jpg',
            maker: 'Chris Hughes',
            bio: 'Owner of The New Republic and Facebook Co-Founder'
        }, {
            comment: '“Our Andela developer is fantastic. He is gifted, focused and responsive. I do not need to micromanage him. I just give him a task and when I check back in, it’\ s done. I look forward to bringing on another Andela developer.”',
            image: 'Bob.jpg',
            maker: 'Bob Calise',
            bio: 'CTO of Young Entrepreneur Council(YEC)'
        }, {
            comment: '"With little more than a few sentence demo description, our Andela developers built out a hybrid desktop/mobile app and backend that was not just feature-rich but really looked beautiful in the UI."',
            image: 'joeheenan.jpg',
            maker: 'Joseph Heenan',
            bio: 'Software Engineer - Segovia Technology Corp'
        }];
    }
])

.factory('EmailService', function() {
    return {
        email: ''
    };
})

.directive('scroll', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('scroll', function() {
            if (this.pageYOffset >= 1) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.$apply();
        });
    };
})

.directive('stick', function($window, $location) {
    return function(scope, elem, attrs) {
        angular.element($window).bind('scroll', function() {
            var windowpos = $window.pageYOffset;
            if (windowpos <= 200) {
                elem.removeClass('fixed-twitter');
                elem.removeClass('twitterBottom');
            } else if (windowpos > 200 && windowpos < 1300) {
                elem.addClass('fixed-twitter');
                elem.removeClass('twitterBottom');
            } else {
                elem.removeClass('fixed-twitter');
                elem.addClass('twitterBottom');
            }
        });
    };
}).directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]).directive('showArrow', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.children().removeClass('carousel-control');
        }
    };
});

angular.module('core').run(['$rootScope', function($rootScope) {

    $rootScope.$on('$stateChangeSuccess', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
    });
}]);
