/**
 * @ngdoc overview
 * @name app.Login
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Login', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    $stateProvider
     .state('Login', {
       url:'/login',
       templateUrl:'src/Login/login.html',
       controller: 'Login as vm'
     }
    );
  }

}());
