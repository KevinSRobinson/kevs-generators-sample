/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);


__webpack_require__(5);
__webpack_require__(6);

__webpack_require__(7);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function () {

  'use strict';
  var env = {};

  // Import variables if present (from env.js)
  if (window) {
    Object.assign(env, window.__env);
  }

  var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'my-angular-components', 'auth0.lock', 'angular-jwt']);

  //add the enviornment as a constant
  app.constant('__env', env);
  app.constant('apiBase', 'http://localhost:7266/api');

  var config = function (lockProvider, jwtOptionsProvider) {

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      }

    });

    lockProvider.init({
      clientID: '9rAOq84sR3s6GhMI2cwZq0rNNOdVAlJB',
      domain: 'volunteernow.auth0.com'
    });

  };


  config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  app.config(config);
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

angular.module('app').constant('__AppConfig', {
    'clientID': 'tymUlBA8eZpCXvAGITFgxDrHYzGJRuCX',
    'domain': 'volunteernow.auth0.com',

    'autoSaveTimeout': 3000,

});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var run = function($rootScope, authService, lock, authManager) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthenticationListener();

    // Use the authManager from angular-jwt to check for
    // the user's authentication state when the page is
    // refreshed and maintain authentication
    authManager.checkAuthOnRefresh();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();
}

run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];

angular.module('app').run(run);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var config = function ($stateProvider,  $urlRouterProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        controller: function ($rootScope) {
            var vm = this;
            vm.isAuthenticated = $rootScope.isAuthenticated;
        },
       template: '<main></main>' 
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);   

    $urlRouterProvider.otherwise('/home');
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module("app").config(config);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var main = {
  controllerAs: 'vm',
  controller: function ($rootScope) {
    var vm = this;
    vm.isAuthenticated = $rootScope.isAuthenticated;
  },
  templateUrl: 'src/client/Features/Home/Components/Main/_mainTemplate.html'
};

angular.module("app").component("main", main);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var mainLayout = {
  bindings: {
    allowChanges: '@'
  },
  controllerAs: 'vm',
  templateUrl: './src/Client/Features/Navigation/Components/mainLayoutTemplate.html',
  controller: function () {
    var vm = this;

    vm.userName = 'Test Username';

    vm.sideMenuItems = [{
      state: 'login',
      linkText: 'Login',
      icon: 'cogs',
      requiresLogin: false
    }, {
      state: 'lookupLists',
      linkText: 'Lookup Lists',
      icon: 'cogs',
      requiresLogin: true
    }];


    vm.userMenuItems = [{
      state: 'userprofile',
      linkText: 'User Profile',
      icon: 'user'
    }, {
      state: 'useroptions',
      linkText: 'User Options',
      icon: 'cogs'
    }, {
      state: 'logout',
      linkText: 'Logout',
      icon: 'cogs'
    }, {
      state: 'login',
      linkText: 'Login',
      icon: 'check'
    }];

    vm.alertMenuItems = [{
      state: 'alert1',
      linkText: 'Alert 1',
      icon: 'bell'
    }, {
      state: 'alert2',
      linkText: 'Alert 3',
      icon: 'bell'
    }];

    // vm.footerLinks = [{
    // 		state: 'link1',
    // 		linkText: 'Link 1'
    // 	}, {
    // 		state: 'link2',
    // 		linkText: 'Link 2'
    // 	}, {
    // 		state: 'link3',
    // 		linkText: 'Link 3'
    // 	},


  },
}
angular.module('app').component('mainLayout', mainLayout);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var config = function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    var homeMainState = {
        name: 'homeMainState',
        url: '/',
        controllerAs: "vm",
        template: '<home></home>'
    };

    $stateProvider.state(homeMainState);

    $urlRouterProvider.otherwise('/');
};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

angular.module("app").config(config);

/***/ })
/******/ ]);