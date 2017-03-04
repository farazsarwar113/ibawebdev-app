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
    function Signup() {
        var vm = this;
        vm.user = {};
        vm.testFunction = testFunction;

        /////////////////////

        /**
         * @ngdoc method
         * @name testFunction
         * @param {number} num number is the number of the number
         * @methodOf app.Signup.controller:Signup
         * @description
         * My Description rules
         */
        function testFunction(num) {
            console.info('This is a test function');
        }

        vm.signUp = function () {

            dataService.user.register(vm.user).then(
                function (res) {
                    $state.go('Dashboard');
                    console.log(res.data);
                },
                function (err) {
                    console.log(err);
                });
        }
    }

}());
