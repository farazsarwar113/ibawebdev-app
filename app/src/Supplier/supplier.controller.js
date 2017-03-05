/**
 * @ngdoc controller
 * @name app.Supplier.controller:Supplier
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Supplier')
		.controller('Supplier', Supplier);

  /* @ngInject */
	function Supplier(r_supp){
		var vm = this;

		vm.testFunction = testFunction;
    vm.supplier = r_supp.data;




    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Supplier.controller:Supplier
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
