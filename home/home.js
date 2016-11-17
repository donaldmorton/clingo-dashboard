(function() {
  'use strict';
  angular
    .module('clingoDashboard')
    .controller('homeController', homeController);

   /** @ngInject */
   function homeController($scope) {
      $scope.orders = [
        {orderNum:'Bolsa 58',name:'Donald Morton',cantidad:3,folio:'0223'},
        {orderNum:'Bolsa 59',name:'Rodirgo Fonseca',cantidad:4,folio:'0224'},
        {orderNum:'Bolsa 60',name:'Antonio Torres',cantidad:7,folio:'0225'},
        {orderNum:'Bolsa 61',name:'Ignacio Zaragoza',cantidad:6,folio:'0226'},
        {orderNum:'Bolsa 62',name:'Pedro Torres',cantidad:8,folio:'0227'},
      ]
   }
})();
