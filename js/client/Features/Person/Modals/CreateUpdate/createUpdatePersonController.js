var createUpdatePersonModalController = function ($uibModalInstance, peopleDataService, person) {
    var vm = this;
    vm.person = person;

    vm.init = function () {
       if (person != null) {
           vm.person = person.person;
       };
    };

    vm.save = function () {
       var personPromise = peopleDataService.Modify(vm.person);
       personPromise.then(function (response) {
           $uibModalInstance.close(response.data);
       });
    };

    vm.close = function () {
      //  $uibModalInstance.close();
    };

    vm.init();
}

angular.module('app').controller('createUpdatePersonModalController', createUpdatePersonModalController);