var peopleModelService = function($uibModal){
	 
	let modifyTemplate = require('raw-loader!../CreateUpdate/createUpdatePersonModalTemplate.html');
	let deleteTemplate = require('raw-loader!../Delete/deletePersonModalModalTempalte.html');


var add = function() {
return $uibModal.open({
template: modifyTemplate,
	controller: 'createUpdatePersonModalController',
	controllerAs: 'vm',
	resolve: {
	person: function () {
		return null;
	}}});
};
	

var del = function(person) { 
return $uibModal.open({ 
	template: modifyTemplate,
controller: 'deletePersonController', 
  controllerAs: 'vm', 
  resolve: { 
  person: function () { 
    return person; 
  }}}); 
}; 

var modify = function(person) {
return $uibModal.open({
	template: modifyTemplate,
controller: 'createUpdatePersonModalController',
	controllerAs: 'vm',
	resolve: {
	person: function () {
		return person;
	}}});
};


return {
	add: add,
	Modify: modify,
	Delete: del
}
 }
angular.module('app').factory('peopleModelService', peopleModelService);

