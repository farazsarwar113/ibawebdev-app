(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Customer', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.Customer'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Customer', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
