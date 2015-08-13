app.controller('BuildingCtrl', function ($scope, $http) {
	$scope.words = [];
	$scope.rebusWords = [];


    $scope.leftest = -1;
    $scope.buildRebus = function() {
		$scope.rebusWords = returnWords($scope.words, "lorem");
        for (var i = 0; i < $scope.rebusWords.words.length; i++) {
            if ($scope.rebusWords.words[i].position > $scope.leftest) {
                $scope.leftest = $scope.rebusWords.words[i].position;
            }
        }
        $scope.$apply();
    }

	$http({method: 'GET', url: 'php/get_words.php'}).success(function(data) {
		$scope.words = data;
		$scope.buildRebus();
	});
});