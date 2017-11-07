(function () {

  'use strict';
  var env = {};

  // Import variables if present (from env.js)
  if (window) {
    Object.assign(env, window.__env);
  }

  var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'my-angular-components']);

  //add the enviornment as a constant
  app.constant('__env', env);
  app.constant('apiBase', 'http://localhost:7266/api');

  // var config = function (lockProvider, jwtOptionsProvider) {

  //   // Configuration for angular-jwt
  //   jwtOptionsProvider.config({
  //     tokenGetter: function () {
  //       return localStorage.getItem('id_token');
  //     }

  //   });

  //   lockProvider.init({
  //     clientID: '9rAOq84sR3s6GhMI2cwZq0rNNOdVAlJB',
  //     domain: 'volunteernow.auth0.com'
  //   });

  // };


  // config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  //app.config(config);
})();
