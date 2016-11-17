(function() {
  'use strict';
  angular
    .module('clingoDashboard')
    .controller('logInController', logInController);

   /** @ngInject */
   function logInController($scope,$window) {
      $scope.logIn = function(email,password){
        console.log(email,password);
        $window.location.href = "#/orders";
      }
   }
})();
