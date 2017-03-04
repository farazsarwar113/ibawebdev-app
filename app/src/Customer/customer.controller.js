/**
 * @ngdoc controller
 * @name app.Customer.controller:Customer
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Customer')
		.controller('Customer', Customer);

  /* @ngInject */
	function Customer(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Customer.controller:Customer
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
