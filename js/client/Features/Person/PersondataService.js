var peopleDataService = function($http, apiBase) {
	
    peopleApiBase = apiBase +  "/people";

    var getAll = function(){
        console.log('peopleApiBase = ' + peopleApiBase);
		return $http.get(peopleApiBase);
	};

    var getById = function(id) {
		return $http.get(peopleApiBase + '/' + id);
	};

    var create = function(person) {
        return $http.put(peopleApiBase + + '/' + person._id, person);
    };    

    var modify = function(person) {
		     if (person != null  && person._id != null) { 
              return $http.put(apiBase + person._id, person); 
          } 
          else { 
              return $http.post(apiBase, person); 
          } 
    };

  
    var del = function(person) {
		return $http.delete(apiBase + person.person._id, person.person);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('peopleDataService', peopleDataService);

