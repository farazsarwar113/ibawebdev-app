(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Supplier', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.Supplier'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Supplier', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
