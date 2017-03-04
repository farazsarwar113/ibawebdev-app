/**
 * @ngdoc overview
 * @name app.AllEmployees
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.AllEmployees', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('AllEmployees', {
       url:'/allEmployees',
       templateUrl:'src/AllEmployees/allEmployees.html',
       controller: 'AllEmployees as vm'
     }
    );
  }

}());
