var main = {
  controllerAs: 'vm',
  controller: function ($rootScope) {
    var vm = this;
    vm.isAuthenticated = $rootScope.isAuthenticated;
  },
  template: require('raw-loader!./homeTemplate.html')
};

angular.module("app").component("main", main);
