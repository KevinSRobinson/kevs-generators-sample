function deletePersonController($uibModalInstance, peopleDataService, person) {
  var vm = this;
  vm.person = person;

  vm.save = function () {

    var personPromise = peopleDataService.Delete(vm.person);
    personPromise.then(function (response) {
      $uibModalInstance.close(vm.person);
    });

  };

  vm.close = function () {
    $uibModalInstance.close(0);
  };
}

angular.module("app").controller("deletePersonController", deletePersonController);
