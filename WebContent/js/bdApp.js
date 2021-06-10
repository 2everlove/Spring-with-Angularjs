'use strict';

var bdApp = angular.module("bdApp", []);

// 팩토리 정의
bdApp.factory("bdService", function($http){

	var service = {
		//글작성
		addBoard			: addBoardAjax
		//게시글 리스트 보기
		,selectBoardList	: selectBoardListAjax
		//글수정
		,updateBoard		: updateBoardAjax
		//글 삭제
		,removeBoard		: removeBoardAjax
	};
	
	return service;
	
	function addBoardAjax(param){
		return $http.post("/board/addBoard",param)
					.then(handleSuccess, handleError);
	}
	
	function selectBoardListAjax(){
		return $http.post("/board/selectBoardList")
					.then(handleSuccess, handleError);
	}
	
	function updateBoardAjax(param){
		return $http.post("/board/updateBoard")
					.then(handleSuccess, handleError); 
	}
	
	function removeBoardAjax(param){
		return $http.post("/board/removeBoard")
					.then(handleSuccess, handleError); 
	}
	
	//////////////////////////////////////////////////////////////////////////
	
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