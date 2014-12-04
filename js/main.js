;(function(){
  'use strict';
  angular.module('myApp',[])
    .controller('SimpleController',function(){
      var vm = this;
      vm.name = "Sonda";
      vm.cats = ['Ashley','Bob','Susan'];
    });
}());
