/**
 * @ngdoc overview
 * @name app.Supplier
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Supplier', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Supplier', {
       url:'/supplier',
       templateUrl:'src/Supplier/supplier.html',
       controller: 'Supplier as vm',
       resolve :{
         r_supp : function (dataService) {
           return dataService.Suplier.getProducts();
         }
       }
     }
    );
  }

}());
