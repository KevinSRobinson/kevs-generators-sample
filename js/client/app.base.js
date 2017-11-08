(function () {

  'use strict';
  var env = {};

  // Import variables if present (from env.js)
  if (window) {
    Object.assign(env, window.__env);
  }


  var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'my-angular-components', 
    
    ]);

  //add the enviornment as a constant
  app.constant('__env', env);
  app.constant('apiBase', 'http://localhost:7266/api');



})();
