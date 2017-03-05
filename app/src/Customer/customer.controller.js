/**
 * @ngdoc controller
 * @name app.Customer.controller:Customer
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.Customer')
    .controller('Customer', Customer);

  /* @ngInject */
  function Customer(r_cust) {
    var vm = this;

    vm.testFunction = testFunction;
    vm.status = status;


    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Customer.controller:Customer
     * @description
     * My Description rules
     */
    function testFunction(num) {
      console.info('This is a test function');
    }

    function status(status1) {
      if (status1 == 0)
        return "Placed"
      else if (status1 == 1)
        return "Delivered"
    }
  }

}());
