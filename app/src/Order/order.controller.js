/**
 * @ngdoc controller
 * @name app.Order.controller:Order
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Order')
		.controller('Order', Order);

  /* @ngInject */
	function Order(r_order){
		var vm = this;

		vm.testFunction = testFunction;
    vm.order = r_order.data;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Order.controller:Order
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
