(function(){
	'use strict';
	angular.module("LunchCkecker",[])
	.controller("LunchCkeckerController",LunchCkeckerController);
	LunchCkeckerController.$inject=['$scope','$filter'];
	function LunchCkeckerController($scope){
		$scope.msg="";
		$scope.lunchmenu="";
		$scope.tooMuch = function(lunchString){
			var ans = lunchString.split(",");
			var count=0;
			for(var i=0;i<ans.length;i++) {
				if(ans[i] == "") {
					continue;
				} else{ 
					count++;
					}
				}
			console.log(count);
			$scope.msg = disaplayMsg(count);
		}
		 
	};
	function disaplayMsg(lunchItem){
		
		if(lunchItem > 0 && lunchItem <=3  ) {
			return "Enjoy";
		}
		else {
			return "Too much!";
		}
	}
})();