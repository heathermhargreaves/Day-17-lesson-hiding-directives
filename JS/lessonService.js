angular.module('directivePractice').service('lessonService', ['$http', function ($http) {
	this.getSchedule = function () {
		return $http.get('/JS/schedule.json');
	}
}]);
