var peopleList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: './src/Client/Features/Person/Components/List/peopleListTemplate.html',
controller: function ($state, peopleDataService, peopleModelService) {
    var vm = this;
    vm.error = {};
    vm.pageSize = 10;
      vm.editMode = true; 
    vm.showButtons = true; 
    vm.people = [];

    vm.init = function(){
        vm.loadpeoples();
    };

    vm.loadpeoples = function(){
        var peoplePromise= peopleDataService.GetAll();
        peoplePromise.then(function(response){
	     vm.people = response.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = peopleModelService.add();
        modal.result.then(function(response){
	        vm.people.push(response);
        });
    };

    vm.edit = function(person){
        peopleModelService.Modify(person);
    };

    vm.details = function(response){
		$state.go('person', {
                    id: response.person._id
                });
	};

    vm.delete = function(person){ 
        peopleModelService.Delete(person); 
    }; 

    vm.init();

    }
};
angular.module('app').component('peopleList', peopleList);
