var app = angular.module('usersModule',[])

		  .controller("testCtrl",function($scope,$http){

		  	$http.get("https://api.github.com/users").then(function(response) {
		        $scope.myData = response.data;
		    });

		  });