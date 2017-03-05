/**
 * @ngdoc overview
 * @name app.Help
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Help', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Help', {
       url:'/help',
       templateUrl:'src/Help/help.html',
       controller: 'Help as vm'
     }
    );
  }

}());
