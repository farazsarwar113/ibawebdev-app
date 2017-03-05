/**
 * @ngdoc controller
 * @name app.Help.controller:Help
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Help')
		.controller('Help', Help);

  /* @ngInject */
	function Help(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Help.controller:Help
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
