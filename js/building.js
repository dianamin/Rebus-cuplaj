app.controller('BuildingCtrl', function ($scope, $http) {
	$scope.words = [];
	$scope.test = "yay";
	$http({method: 'GET', url: 'php/get_words.php'}).success(function(data) {
		$scope.words = data;
		console.log(data);
	});
});