var main = {
  controllerAs: 'vm',
  controller: function ($rootScope) {
    var vm = this;
    vm.isAuthenticated = $rootScope.isAuthenticated;
  },
  templateUrl: 'src/client/Features/Home/Components/Main/_mainTemplate.html'
};

angular.module("app").component("main", main);
