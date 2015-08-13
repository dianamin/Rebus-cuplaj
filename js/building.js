app.controller('BuildingCtrl', function ($scope, $http) {
	$scope.words = [];
	$scope.rebusWords = [];
	$scope.results = [];

    $scope.leftest = -1;
    $scope.buildRebus = function() {
    	/*
    		Construiesc rebusul pentru cuvântul rezultat ales random, apoi verific care este cea mai din stânga poziție pentru afișarea rebusului.
    	*/
    	var index = Math.floor(Math.random() * $scope.results.length);
		$scope.rebusWords = returnWords($scope.words, $scope.results[index].word);

        for (var i = 0; i < $scope.rebusWords.words.length; i++) {
            if ($scope.rebusWords.words[i].position > $scope.leftest) {
                $scope.leftest = $scope.rebusWords.words[i].position;
            }
        }
        $scope.$apply();
    }

    $scope.checkRebus = function() {
        /*
        	Verific dacă input-ul este corect.
        */

        var ok;

        for (var i = 0; i < $scope.rebusWords.words.length; i++) {
            var input = "";
            for (var j = 0; j < $scope.rebusWords.words[i].letters.length; j++) {
                var value = document.getElementById(i + 'a' + j).value.toLowerCase();
                input = input + value;
            }
            if (input.toLowerCase() == $scope.rebusWords.words[i].value) {
                $scope.rebusWords.words[i].correct = true;
            }
        }
    }

	$http({method: 'GET', url: 'php/get_words.php'}).success(function(data) {
		/*
			Preiau cuvintele din baza de date.
		*/
		$scope.words = data;
		$http({method: 'GET', url: 'php/get_results.php'}).success(function(data) {
			/*
				Preiau posibilele rezultate din baza de date și construiesc rebusul.
			*/
			$scope.results = data;
			$scope.buildRebus();
		});
	});
});