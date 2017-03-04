/**
 * @ngdoc controller
 * @name app.Inventory.controller:Inventory
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Inventory')
		.controller('Inventory', Inventory);

  /* @ngInject */
	function Inventory(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Inventory.controller:Inventory
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
