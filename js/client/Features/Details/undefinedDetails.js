var Details = {
    bindings: {
        allowChanges: '@'
    },
    controllerAs: "vm",
    templateUrl: './src/Client/Features//Components/Details/DetailsTemplate.Html',
    controller: function (, __AppConfig,  $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;

        // vm. = {};
        // vm.status = {
        //     isError: false,
        //     message: ''
        // };

        // vm.Tags = [];
        // vm.attachedVolunteers = [];


        vm.$onInit = function () {
            //vm.loadLookuplists()
            vm.loadDetails();
        };

        // vm.loadVolunteerDetails = function () {
        //     var promise = contactsDataService.GetById($stateParams.id, "Volunteer");
        //     promise.then(function (response) {
        //         vm. = response.data;
        //     });
        // };


        vm.loadDetails = function () {
            var promise = .GetById($stateParams.id);
            promise.then(function (response) {
                vm. = response.data;
            });
        };


        // vm.save = function () {
        //     saveVolunteerDetails();
        // }

        // var saveVolunteerDetails = function () {
        //     var modifyPromise = contactsDataService.Modify(vm.);
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
        //        vm.Tags = lookupListsDataService.FilterLookupList("Tag", vm.lookuplists);

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


angular.module('app').component('Details', Details);