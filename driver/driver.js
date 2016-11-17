(function() {
  'use strict';
  angular
    .module('clingoDashboard')
    .controller('driverController', driverController);

   /** @ngInject */
   function driverController($scope) {
      $scope.drivers = [
        {name:'Sergio Aguirre',numero:8113516480,rides:5},
        {name:'Manuel Treviño',numero:8190587480,rides:10},
        {name:'Karla Guajardo',numero:8132516200,rides:4}
    ]
   }
})();
