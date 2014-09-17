'use strict';

angular.module('angularTestApp')
  .controller('ListingCtrl',['$scope','$http',function($scope,$http){
    $scope.listing = {};
    
    //could call this from api
    /*
    $scope.listings = [{
      name: 'test',
      date: Date.now(),
      status: 'Pending'
    },{
      name: 'test2',
      date: Date.now(),
      status: 'Pending'
    }];
    */

    $http.get('/test.json').
    success(function(data) {
      $scope.listings = data;
    });
    
    //pass listings into function so that it can be updated
    $scope.addListing = function(listings){
      //could post this to data back to server and do more validation
      listings.push(this.listing); //add the data from the form into listings
      this.listing = {}; // reset the form
    };
    
    $scope.removeListing = function(listing){
      $scope.listings.splice(listing,1);
    };

  }]);
