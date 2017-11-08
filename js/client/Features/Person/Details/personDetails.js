var personDetails = {
    bindings: {
        allowChanges: '@'
    },
    controllerAs: "vm",
    templateUrl: './src/Client/Features/Person/Components/Details/personDetailsTemplate.Html',
    controller: function (peopleDataService, __AppConfig,  $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;

        // vm.person = {};
        // vm.status = {
        //     isError: false,
        //     message: ''
        // };

        // vm.personTags = [];
        // vm.attachedVolunteers = [];


        vm.$onInit = function () {
            //vm.loadLookuplists()
            vm.loadPersonDetails();
        };

        // vm.loadVolunteerDetails = function () {
        //     var promise = contactsDataService.GetById($stateParams.id, "Volunteer");
        //     promise.then(function (response) {
        //         vm.person = response.data;
        //     });
        // };


        vm.loadPersonDetails = function () {
            var promise = peopleDataService.GetById($stateParams.id);
            promise.then(function (response) {
                vm.person = response.data;
            });
        };


        // vm.save = function () {
        //     saveVolunteerDetails();
        // }

        // var saveVolunteerDetails = function () {
        //     var modifyPromise = contactsDataService.Modify(vm.person);
        //     modifyPromise.then(function (response) {
        //         vm.status.message = "Volunteer Saved";
        //         vm.status.isError = false;
        //     }).catch(function (error) {
        //         vm.status.message = "Error";
        //         vm.status.isError = true;
        //     });
        // };

        // vm.loadLookuplists = function () {

        //     var promise = lookupListsDataService.ReadAllByParent("Volunteer")
        //     promise.then(function (response) {
        //         vm.lookuplists = response.data;

        //         //vm.tags = vm.lookuplists;
        //        vm.personTags = lookupListsDataService.FilterLookupList("Tag", vm.lookuplists);

        //     })


        //     //Load Common LookupLists
        //     var promise = lookupListsDataService.ReadAllByParent("Common")
        //     promise.then(function (response) {
        //         vm.commonLookuplists = response.data;

        //         //populate seperate lookuplists
        //         vm.areaOptions = lookupListsDataService.FilterLookupList("Area", vm.commonLookuplists);
        //     })
        // }

        // //auto save
        // $interval(saveVolunteerDetails, __AppConfig.autoSaveTimeout);
    }
};


angular.module('app').component('personDetails', personDetails);