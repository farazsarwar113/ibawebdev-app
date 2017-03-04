/**
 * @ngdoc controller
 * @name app.Product.controller:Product
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Product')
		.controller('Product', Product);

  /* @ngInject */
	function Product(r_products,$mdDialog){
		var vm = this;

		vm.testFunction = testFunction;

    vm.products = [];
    // vm.products = r_products.data;
    /////////////////////

    vm.showAddProduct = function(ev) {
      $mdDialog.show({
        templateUrl: 'src/Product/showProductDialouge.html',
        controller : addDialoge,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,

      });
    };

    vm.showAddRemove = function(ev) {
      $mdDialog.show({
        templateUrl: 'src/Product/addRemove.html',
        controller : showAddRemove,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,

      });
    };

    function addDialoge($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    function showAddRemove($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      $scope.order = 0 ;

      $scope.plus = function () {
        $scope.order ++;
      }
      $scope.minus = function () {
        if($scope.order > 0)
          $scope.order --;
      }
    }
    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Product.controller:Product
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
