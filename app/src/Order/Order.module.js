/**
 * @ngdoc overview
 * @name app.Order
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Order', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Order', {
       url:'/order',
       templateUrl:'src/Order/order.html',
       controller: 'Order as vm',
       resolve: {
         r_order : function (dataService) {
           return dataService.order.getOrder();
         }
       }
     }
    );
  }

}());
