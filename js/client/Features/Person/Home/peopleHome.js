var personsHome = {
    controllerAs: "vm",
    templateUrl: 'personsHome.Html',
    
    controller: function () {
        var vm = this;
        vm.persons = [];

         vm.getFileName = function(){
            var d = new Date(); 
            return "persons_" + d.getDay() + '.' + d.toString("MMMM")  + '.' + d.toString("YYYY") + ".csv";
        }

        //generates a flat data list
        vm.getItems = function () {


            //get the header list
            var headers = vm.headers;


            var items = [];

            //loop through the clients
            angular.forEach(vm.persons, function (contact, key) {

                //build 
                var item = {};

                angular.forEach(headers, function (value, key) {
                    item[value] = contact[value];
                });

                items.push(item);
            });

            return items;
        }

        vm.headers = ['OldId',
            'IsActive',
            'Title',
            'FirstName',
            'LastName',
            'Dob',
            'Address1',
            'Address2',
            'Address3',
            'Town',
            'PostCode',
            'Address',
            'Tel',
            'Mobile',
            'Area',
            'DateJoined',
            'Clients',
            'Tags',
            'InductionTraining',
            'BackcareAwareness',
            'FirstcarAwareness',
            'FirsAidCourse',
            'AgeLinkCourse',
            'CreatedOn'
        ];
    }

};


angular.module('app').component('personsHome', personsHome);