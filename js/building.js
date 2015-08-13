app.controller('BuildingCtrl', function ($scope, $http) {
	$scope.words = [];
	$scope.rebusWords = [];

    $scope.leftest = -1;
    $scope.buildRebus = function() {
    	/*
    		Construiesc rebusul pentru cuvântul "lorem", apoi verific care este cea mai din stânga poziție pentru afișarea rebusului.
    	*/
		$scope.rebusWords = returnWords($scope.words, "lorem");

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
                //console.log(value);
                input = input + value;
            }
            console.log($scope.rebusWords.words[i].value + " ");
            if (input.toLowerCase() == $scope.rebusWords.words[i].value) {
                $scope.rebusWords.words[i].correct = true;
            }
        }
    }

	$http({method: 'GET', url: 'php/get_words.php'}).success(function(data) {
		/*
			Preiau datele din baza de date si construiesc rebusul.
		*/
		$scope.words = data;
		$scope.buildRebus();
	});
});