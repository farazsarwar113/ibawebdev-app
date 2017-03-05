/**
 * @ngdoc controller
 * @name app.Signup.controller:Signup
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.Signup')
    .controller('Signup', Signup);

  /* @ngInject */
  function Signup(dataService, $state, $localStorage, Restangular, $rootScope) {
    var vm = this;
    vm.account = {};
    vm.register = register;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Signup.controller:Signup
     * @description
     * My Description rules
     */

    function register() {
      console.log(vm.account);
      dataService.user.register(vm.account).then(
          function (res) {
              $state.go('Dashboard');
            console.log(res.data);
            $localStorage.token = res.data.token;
            Restangular.setDefaultHeaders({'x-access-token': res.data.token});
            $rootScope.user = res.data.user;
            console.log($rootScope.user);

          },
          function (err) {
              console.log(err);
          });
    }
  }

}());
