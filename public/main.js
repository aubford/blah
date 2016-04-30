angular.module("main", [])


angular.module("main").controller("mainController", ["$scope", "$http", function($scope, $http){

	var customExcuses = [
	"Nobody told me that this was due so soon.",
	"I accidentally deleted my github repository.",
	"I thought that Bob was doing this.",
	"I thought we were using Angular 1.0, not Angular 2.0",
	"Ohhhhhh... Java, not JavaScript.  Okay.",
	"My cable went out.",
	"The SCRUM master didn't tell us a timeline at standup!",
	"I'm trying to make it ECMA6 compliant, so it's taking more time.",
	"I could submit this, but it's really not DRY enough.",
	"Oh I thought you meant the other Bob.",
	"I just started Galvanize this week, I don't have much experience as you guys!",
	"I didn't have time to finish because I was coming up an excuse for not finishing",
	"I don't have an excuse for missing but the excuse for no excuse is the crappy website that generated it.",
	"well.. ya know... right?!",
	"I'm sorry I just discovered the internet",
	"I experienced technical difficulty, my brain's not working",
	"Oh you really wanted me to do that?",
	"I would but I dropped my car keys in the snow and have to wait until spring to find them",
	"oh my coffee is empty ... I have to go.. fill it." ];



	function getRandomArbitrary (min, max) {
	  return Math.random()*(max-min)+min;
	}

	function getExxcuse () {
	var index= Math.floor(getRandomArbitrary(0, customExcuses.length));
	return customExcuses[index];
	}

	$scope.getExcuse = function(){


		var category= Math.floor(Math.random()*(2-0));
		switch (category){
			case 0:
				$scope.excuse = getExxcuse();
			case 1:
				$http.get("/getExcuse")
				.then(function(returnData){
				$scope.excuse = returnData.data;
		})
	}
}



	$scope.shakestatus = "stay"

	$scope.shake = function(){
		$scope.getExcuse()

		// $scope.shakestatus = "shake"

		// setTimeout(function(){

			if($scope.shakestatus === "shake"){

				$scope.shakestatus = "stay"

			}else{

				$scope.shakestatus = "shake"

			}

		// }, 100)

	}


}])
