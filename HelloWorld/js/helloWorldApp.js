var helloWorldApp = angular.module('helloWorldApp', []);
helloWorldApp.controller('HelloWorldController', function($scope) {
	$scope.name = '';
	$scope.sayHello = function() {
		$scope.message = 'Hello World!  Welcome to the world of AngularJS development'
		if ($scope.name == '') {
			$scope.message = $scope.message + "."
		}
		else {
			$scope.message = $scope.message + ", " + $scope.name + '.';
		}
	};
});
