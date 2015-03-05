'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$location',
	function($scope, Authentication, Menus, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
])
.directive('autoActive', ['$location', function ($location) {
return {
    restrict: 'A',
    scope: false,
    link: function (scope, element) {
        function setActive() {
            var path = $location.path();
            if (path) {
                angular.forEach(element.find('li'), function (li) {
                    var anchor = li.querySelector('a');
                    if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                        angular.element(li).addClass('active');
                    } else {
                        angular.element(li).removeClass('active');
                    }
                });
            }
        }

        setActive();

        scope.$on('$locationChangeSuccess', setActive);
    }
}
}]);
