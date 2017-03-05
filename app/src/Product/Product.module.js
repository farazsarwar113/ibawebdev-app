/**
 * @ngdoc overview
 * @name app.Product
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Product', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Product', {
       url:'/product',
       templateUrl:'src/Product/product.html',
       controller: 'Product as vm',
       resolve: {
         r_products: function (dataService) {
            return dataService.products.getAllProducts();
         }
       }
     }
    );
  }

}());
