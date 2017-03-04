/**
 * @ngdoc service
 * @name app.common.dataService
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.common')
        .factory('dataService', dataService);

    /* @ngInject */
    function dataService(Restangular) {

        var user = {
            login: function (user) {
                return Restangular.one('users').one('login').post('', user);
            },
            logout: function () {
                return Restangular.one('users').one('logout').get();
            },
            register: function (user) {
                return Restangular.one('users').one('register').post('', user);
            }
        };

        var Suplier = {
            getAllSuppliers: function () {
                return Restangular.one('suppliers').get();
            }
        };
        var products = {
            getAllProducts: function () {
                return Restangular.one('products').get();
            },
            addProduct: function (product) {
                return Restangular.one('products').customPOST(product);
            }
        };
        var inventory = {
            getAllInventory: function () {
                return Restangular.one('inventory').get();
            }

        };
        var employee = {
            getAllEmployes: function () {
                return Restangular.one('employee').get();
            }
        };
        var customer = {
            getAllCust: function () {

            }

        };


        return {
            user: user,
            customer: customer,
            employee: employee,
            inventory: inventory,
            products: products
        };

    }

}());
