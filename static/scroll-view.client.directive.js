// angular.module('core').directive('scroll', [ 
//     function($window) {
//     return function(scope, element, attrs) {
//         angular.element($window).bind('scroll', function() {
//             if (this.pageYOffset >= 1) {
//                 scope.boolChangeClass = true;
//             } else {
//                 scope.boolChangeClass = false;
//             }
//             scope.$apply();
//         });
//     };
// });

// angular.module('core').directive('memberDetailView', [
//     function() {