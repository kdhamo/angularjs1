'use strict'

var blogApp = angular.module('spBlogger', [
	'spBlogger.posts',
	'spBlogger.controllers',
	'spBlogger.directives',
	'spBlogger.filters',
	'spBlogger.services',
	'ui.router'
	]);

blogApp.value('version','V1.0');

blogApp.run(['$state', function($state) {
	$state.go('allPosts');
}]);