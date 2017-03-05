(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Help', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.Help'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Help', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
