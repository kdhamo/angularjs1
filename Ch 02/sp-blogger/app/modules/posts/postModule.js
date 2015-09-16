'use strict'

var postModule = angular.module('spBlogger.posts', [
	'spBlogger.posts.controllers',
	'spBlogger.posts.directives',
	'spBlogger.posts.services',
	'spBlogger.posts.filters',
	'ui.router',
	]);


postModule.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$stateProvider.state('allPosts', {
		url : '/posts',
		templateUrl : 'modules/posts/views/posts.html',
		controller : 'PostController'
	});
	$stateProvider.state('singlePost', {
		url : '/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
    controller: 'PostDetailsController'
	});
}]);