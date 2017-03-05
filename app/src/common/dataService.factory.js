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
            },
            verifyMe : function () {
              Restangular.one('users').one('me').one('verify').get();
            }

          };

        var Suplier = {
            getAllSuppliers: function () {
                return Restangular.one('supplier').get();
            },
           getProducts : function () {
                return Restangular.one('supplier').one('products').get();
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
                return Restangular.one('employees').get();
            }
        };
        var customer = {
            getAllCust: function () {
              return Restangular.one('customers').get()
            }

        };

      var stats = {
        getStats : function () {
          return Restangular.one('stats').one('orders').get();
        }
      }

      var order = {
        getOrder : function () {
          return Restangular.one('order').get();
        },
        placeOrder : function (pid) {
          return Restangular.one('order').one(pid).one('place').one('order').post();
        }
      }

        return {
            user: user,
            customer: customer,
            employee: employee,
            inventory: inventory,
            products: products,
            stats: stats,
            Suplier: Suplier,
          order: order
        };

    }

}());
