/**
 * @ngdoc controller
 * @name app.AllEmployees.controller:AllEmployees
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.AllEmployees')
		.controller('AllEmployees', AllEmployees);

  /* @ngInject */
	function AllEmployees(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.AllEmployees.controller:AllEmployees
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
