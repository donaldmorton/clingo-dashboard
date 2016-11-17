(function() {
  'use strict';
  angular
    .module('clingoDashboard')
    .controller('vansController', vansController);

   /** @ngInject */
   function vansController($scope) {
     $scope.vans = [
       {vehiculo:'Ford Transit',numero:8113516480,rides:45},
       {vehiculo:'Toyota Avanza',numero:8190587480,rides:31},
       {vehiculo:'Ford Transit',numero:8132516200,rides:16}
     ]
   }
})();
