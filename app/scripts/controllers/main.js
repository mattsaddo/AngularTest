'use strict';

/**
 * @ngdoc funetion
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
var myapp = angular.module('angularTestApp');
  myapp.controller('MainCtrl', function ($scope, $location) {
 	$scope.isActive = function (curLocation) {
		return curLocation == $location.path();
	};
  });
