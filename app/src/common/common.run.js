/**
 * @ngdoc controller
 * @name app.common.controller:Common
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular.module('app.common', [])

    .run(function ($rootScope,dataService,$localStorage,Restangular) {

      ////////////////////////////////////////////All RootScope Functions Here
      var vm = this;
      $rootScope.home = true;


      $rootScope.highlightTab = function (state, $ionicSideMenuDelegate) {
        console.log(state);

        if (state == "home") {
          $rootScope.home = true;
          $rootScope.stats = false;
          $rootScope.shop = false;



        } else if (state == "stats") {
          $rootScope.home = false;
          $rootScope.stats = true;
          $rootScope.shop = false;

        }
        else if (state == "shop") {
          $rootScope.home = false;
          $rootScope.stats = false;
          $rootScope.shop = true;
        }
      };

      Restangular.setDefaultHeaders({'x-access-token': $localStorage.token});
      dataService.user.verifyMe().then(function(res){
        console.log(res.data);
        $localStorage.token = res.data.token;
        $rootScope.user = res.data.user;
        Restangular.setDefaultHeaders({'x-access-token': res.data.token});
      });


    })
}());
