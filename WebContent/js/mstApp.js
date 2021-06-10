var mstApp = angular.module("mstApp", []);

mstApp.factory("mstService", function($http){
	
	var service = {
		selectMst050 : selectMst050Ajax	
		
		,regMst050 : regMst050Ajax
		
		,deleteMst050 : deleteMst050Ajax
		
		,updateMst050 : updateMst050Ajax
		
		,mstList : mstListAjax
		
	};
	
	return service;
	
	function selectMst050Ajax(param){
		return $http.post("/mst/selectMst050Ajax",param)
					.then(handleSuccess, handleError);
	}
	
	function regMst050Ajax(param){
		return $http.post("/mst/regMst050Ajax",param)
				.then(handleSuccess, handleError);
	}
	
	function deleteMst050Ajax(param){
		return $http.post("/mst/deleteMst050Ajax",param)
				.then(handleSuccess, handleError);
	}
	
	function updateMst050Ajax(param){
		return $http.post("/mst/updateMst050Ajax",param)
				.then(handleSuccess, handleError);
	}
	
	function mstListAjax(param){
		return $http.post("/mst/mstListAjax",param)
				.then(handleSuccess, handleError);
	}
	
	// private functions
	function handleSuccess(res){
		return res.data;
	}
	
	function handleError(error){
		return function(){
			return {success: false, message: error};
		};
	}	
});