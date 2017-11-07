var List = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: './src/Client/Features//Components/List/ListTemplate.html',
controller: function ($state, , ) {
    var vm = this;
    vm.error = {};
    vm.pageSize = 10;
      vm.editMode = true; 
    vm.showButtons = true; 
    vm. = [];

    vm.init = function(){
        vm.loads();
    };

    vm.loads = function(){
        var Promise= .GetAll();
        Promise.then(function(response){
	     vm. = response.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = .add();
        modal.result.then(function(response){
	        vm..push(response);
        });
    };

    vm.edit = function(){
        .Modify();
    };

    vm.details = function(response){
		$state.go('', {
                    id: response.._id
                });
	};

    vm.delete = function(person){ 
        peopleModelService.Delete(person); 
    }; 

    vm.init();

    }
};
angular.module('app').component('List', List);
