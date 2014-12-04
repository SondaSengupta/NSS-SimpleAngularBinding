;(function(){
  'use strict';
  angular.module('myApp',[])
    .controller('SimpleController',function($scope){
      $scope.name = "Scott";
      $scope.cats = ['Ashley','Bob','Susan'];
    });
}());
