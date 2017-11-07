var DataService = function($http, apiBase) {
	
    apiBase += "//";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var create = function() {
        return $http.put(apiBase + ._id, );
    };    

    var modify = function() {
		     if ( != null  && ._id != null) { 
              return $http.put(apiBase + ._id, ); 
          } 
          else { 
              return $http.post(apiBase, ); 
          } 
    };

  
    var del = function() {
		return $http.delete(apiBase + .._id, .);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('DataService', DataService);

