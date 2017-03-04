/**
 * @ngdoc controller
 * @name app.Login.controller:Login
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Login')
		.controller('Login', Login);

  /* @ngInject */
	function Login($state){
		var vm = this;

    vm.user = {};

		vm.login = login;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Login.controller:Login
     * @description
     * My Description rules
     */
    function login(){
      console.log(vm.user);
      $state.go('Dashboard');
		}
	}

}());
