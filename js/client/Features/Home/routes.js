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