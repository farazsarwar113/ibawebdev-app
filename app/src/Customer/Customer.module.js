/**
 * @ngdoc overview
 * @name app.Customer
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Customer', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Customer', {
       url:'/customer',
       templateUrl:'src/Customer/customer.html',
       controller: 'Customer as vm'
     }
    );
  }

}());
