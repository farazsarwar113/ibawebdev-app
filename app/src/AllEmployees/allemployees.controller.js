/**
 * @ngdoc controller
 * @name app.AllEmployees.controller:AllEmployees
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.AllEmployees')
    .controller('AllEmployees', AllEmployees);

  /* @ngInject */
  function AllEmployees(dataService, r_employees) {
    var vm = this;

    vm.testFunction = testFunction;
    vm.getRole = getRole;
    vm.toggleRole = toggleRole;

    

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.AllEmployees.controller:AllEmployees
     * @description
     * My Description rules
     */
    function testFunction(num) {
      console.info('This is a test function');
    }

    function toggleRole(emp) {
      dataService.employee.toogleRole.then(function (res) {
          console.log(res);

        },
        function (err) {
          console.log(err);

        });
    }

    function getRole(role) {
      if (role == true) {
        return "Admin"
      }
      else
        return "Not Admin"
    }
  }

}());
