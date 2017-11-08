var config = function ($stateProvider) {
    
$stateProvider
    .state('people', {
        url: '/people',
        template: '<people-list></people-list>'
    }) 
    .state('person', {
        url: '/person/:id',
        template: '<person-details></person-details>'
    })
};

angular.module('app').config(config);

