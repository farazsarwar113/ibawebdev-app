(function(){

  'use strict';
  /*
   Just remove and add '//' to the API
   very important Only One API to be open at a time!
   */
  angular.module('app.core')
  /*v1*/ //  .constant('API_URL','http://localhost:3000/');
  /*v2*/  .constant('API_URL','http://10.2.180.103:3000/api');
  // /*v4*/   .constant('API_URL','http://altcityapi-v2.ap-southeast-1.elasticbeanstalk.com/');

}());
