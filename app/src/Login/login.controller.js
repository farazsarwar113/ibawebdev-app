/**
 * @ngdoc controller
 * @name app.Login.controller:Login
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.Login')
        .controller('Login', Login);

    /* @ngInject */
    function Login($state, dataService, $rootScope, $localStorage, Restangular) {
        var vm = this;

        vm.user = {};

        vm.login = login;

        /////////////////////

        /**
         * @ngdoc method
         * @name testFunction
         * @param {number} num number is the number of the number
         * @methodOf app.Login.controller:Login
         * @description
         * My Description rules
         */
        function login() {
          if(vm.user.username && vm.user.password){
            $rootScope.showSimpleToast();
          }
          else{
            $rootScope.showInvalidToast();
            return;
          }
            dataService.user.login(vm.user).then(
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
