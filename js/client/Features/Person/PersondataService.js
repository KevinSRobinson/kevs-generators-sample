var peopleDataService = function($http, apiBase) {
	
    apiBase += "/people/";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var create = function(person) {
        return $http.put(apiBase + person._id, person);
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

