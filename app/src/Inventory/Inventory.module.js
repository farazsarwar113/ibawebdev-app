/**
 * @ngdoc overview
 * @name app.Inventory
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Inventory', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Inventory', {
       url:'/inventory',
       templateUrl:'src/Inventory/inventory.html',
       controller: 'Inventory as vm',
        resolve :{
            r_inventory : function () {
                return dataService.inventory.getAllInventory();
            }
        }
     }
    );
  }

}());
