// 'use strict';

// // Setting up route
// angular.module('core').config(['$stateProvider', '$urlRouterProvider',
// 	function($stateProvider, $urlRouterProvider) {
// 		// Redirect to home view when route not found
// 		$urlRouterProvider.otherwise('/');

// 		// Home state routing
// 		$stateProvider.
// 		state('home', {
// 			url: '/',
// 			templateUrl: 'static/views/home.client.view.html'
// 		}).
// 		state('hire', {
// 			url: '/hire_developer',
// 			templateUrl: 'static/views/hire_a_developer.client.view.html'
// 		}).
// 		state('services', {
// 			url: '/our_services',
// 			templateUrl: 'static/views/service.client.view.html'
// 		}).
// 		state('about', {
// 			url: '/about_us',
// 			templateUrl: 'static/views/about_us.client.view.html'
// 		}).
// 		state('team', {
// 			url: '/meet_the_team',
// 			templateUrl: 'static/views/meet.client.view.html'
// 		}).
// 		state('partners', {
// 			url: '/meet_partners',
// 			templateUrl: 'static/views/partners.client.view.html'
// 		}).
// 		state('andela_network', {
// 			url: '/andela_network',
// 			templateUrl: 'static/views/andela_network.client.view.html'
// 		}).
// 		state('what_we_do', {
// 			url: '/whatwedo',
// 			templateUrl: 'static/views/whatwedo.client.view.html'
// 		}).
// 		state('fellow', {
// 			url: '/fellowship',
// 			templateUrl: 'static/views/fellow.client.view.html'
// 		}).
// 		// state('media', {
// 		// 	url: '/media',
// 		// 	templateUrl: 'views/media.client.view.html'
// 		// }).
// 		state('carmelo', {
// 			url: '/ca140923',
// 			templateUrl: 'views/home.client.view.html'
// 		}).
// 		state('stackoverflow', {
// 			url: '/so140923',
// 			templateUrl: 'views/home.client.view.html'
// 		}).
// 		state('fellows1', {
// 			url: '/co140923',
// 			templateUrl: 'views/home.client.view.html'
// 		}).
// 		state('fellows2', {
// 			url: '/cs140923',
// 			templateUrl: 'views/home.client.view.html'
// 		});
// 	}
// ]);