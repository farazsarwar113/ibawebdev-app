/**
 * @ngdoc service
 * @name app.common.dataService
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('dataService', dataService);

  /* @ngInject */
  function dataService(Restangular){

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



    return {
      user : user
    };

  }

}());
