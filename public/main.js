angular.module("main", [])


angular.module("main")
.controller("mainController", ["$scope", "$http", function($scope, $http){
	$scope.getExcuse = function(){
		$http.get("/getExcuse")
		.then(function(returnData){
			// console.log(returnData);
		})
	}

	$scope.shakestatus = "stay"

	$scope.shake = function(){

		$scope.shakestatus = "shake"

		setTimeout(function(){

			console.log("asdfgasdf")
			if($scope.shakestatus === "shake"){

				$scope.shakestatus = "stay"

			}else{

				$scope.shakestatus = "shake"

			}
		}, 1000)

	}

}])
