/**
 * @ngdoc controller
 * @name app.Dashboard.controller:Dashboard
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Dashboard')
		.controller('Dashboard', Dashboard);

  /* @ngInject */
	function Dashboard(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Dashboard.controller:Dashboard
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
