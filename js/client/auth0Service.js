
    var authService = function($rootScope, lock, authManager) {

        function login() {
            lock.show();
        }

        function logout() {
            localStorage.removeItem('id_token');
            authManager.unauthenticate();
        }

        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();
            });
        }

        return {
            login: login,
            logout: logout,
            isAuthenticated: $rootScope.isAuthenticated,
            registerAuthenticationListener: registerAuthenticationListener
        };
    };

    authService.$inject = ['$rootScope','lock', 'authManager'];

    angular.module('app').factory('authService', authService);

