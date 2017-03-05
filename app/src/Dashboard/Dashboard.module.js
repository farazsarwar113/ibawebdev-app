/**
 * @ngdoc overview
 * @name app.Dashboard
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Dashboard', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Dashboard', {
       url:'/dashboard',
       templateUrl:'src/Dashboard/dashboard.html',
       controller: 'Dashboard as vm',
       resolve :{
         r_data : function (dataService) {
           return dataService.stats.getStats();
         }
       }
     }
    );
  }

}());
