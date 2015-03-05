// angular.module('core').directive('stick', function($window, $location) {
//     return function(scope, elem, attrs) {
//         console.log(elem);
//         angular.element($window).bind('scroll', function() {
//             var windowpos = $window.pageYOffset;
//             var a = elem[0].offsetTop - windowpos;

//             if (a < 80) {
//                 elem.addClass("fixed-twitter");
//                 elem.removeClass("col-md-4");
//             } else {
//                 elem.removeClass("fixed-twitter");
//                 elem.addClass("col-md-4");
//             }
//         });
//     }
// });
