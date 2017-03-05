/**
 * @ngdoc controller
 * @name app.common.controller:Common
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular.module('app.common', [])

    .run(function ($rootScope,dataService,$localStorage,Restangular, $state, $mdToast) {

      var vm = this;


      if ($localStorage.token) {
        Restangular.setDefaultHeaders({
          'x-access-token': $localStorage.token
        });
        dataService.user.verifyMe();
      }

      var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
      };

      $rootScope.toastPosition = angular.extend({},last);

      $rootScope.getToastPosition = function() {
        sanitizePosition();

        return Object.keys($rootScope.toastPosition)
          .filter(function(pos) { return $rootScope.toastPosition[pos]; })
          .join(' ');
      };


      function sanitizePosition() {
        var current = $rootScope.toastPosition;

        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;

        last = angular.extend({},current);
      }

      $rootScope.logout = function () {
        Restangular.setDefaultHeaders({'x-access-token': ''});
        delete $localStorage.token;
        delete $localStorage.reloadFlag;
        delete $rootScope.user;
      };

      $rootScope.isSidemenuHidden = function () {
        if($state.current.name == 'Signup' || $state.current.name == 'Login' || $state.current.name == 'Help' )
          return false;
        else
          return true;
      }

      $rootScope.showSimpleToast = function() {
        var pinTo = $rootScope.getToastPosition();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Logging You In!')
            .position(pinTo )
            .hideDelay(3000)
        );
      };

      $rootScope.showInvalidToast = function() {
        var pinTo = $rootScope.getToastPosition();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Make Sure Everything is Fine!')
            .position(pinTo )
            .hideDelay(3000)
        );
      };

    })
}());
