'use strict';

bdApp.controller('bdController', bdController);

bdController.$inject = ['$rootScope', '$scope', 'bdService'];

function bdController($rootScope, $scope, bdService){
	$scope.isBtnClick = false;
	//게시글 리스트 보기
	$scope.initBoardList = function(){
		bdService.selectBoardList().then(function(res){
			console.log("res : ",res);
			$scope.boardList = res;
		});
	}
	
	//글작성
	$scope.addBoard = function(){
		//java Controller로 요청을 보낼 parameter 생성
		const param = {
			name 			: $scope.boardForm.name
			,email 			: $scope.boardForm.email
			,gender 		: $scope.baordForm.gender
			,title 			: $scope.boardForm.title
			,content 		: $scope.boardForm.content
		}
		//bdSerivce에 addBoard를 요청 한 후, 결과값에 따라 후처리
		bdService.addBoard(param).then(function(res){
			$scope.initBoardList();
		});
		//글 작성 완료 후 boardForm 초기화
		$scope.boardForm = {
			name 		: null
			,email 		: null
			,gender		: null
			,title		: null
			,content	: null
		}
	}
	
	//글 상세보기
	$scope.detailBoardView = function(no){
		$scope.isBtnClick = !$scope.isBtnClick;
		
		for(var i=0; i < $scope.boardList.length; i++){
			if($scope.boardList[i].no == no){
				$scope.detail = {
					no			: $scope.boardList[i].no 
					,name		: $scope.boardList[i].name
					,email		: $scope.boardList[i].email
					,gender		: $scope.boardList[i].gender
					,title		: $scope.boardList[i].title
					,content	: $scope.boardList[i].content
				};
			}
		}
	}
	
	//글 수정
	$scope.updateBoard = function(no){
		const param = {
			no			: $scope.detail.no
			,name		: $scope.detail.name
			,email		: $scope.detail.email
			,gender		: $scope.detail.gender
			,title		: $scope.detail.title
			,content	: $scope.detail.content
		};
		
		bdService.updateBoard(param).then(function(res){
			$scope.initBoardList();			
		});
	}
		
	//글 삭제
	$scope.removeBoard = function(no){
		for(var i = 0; i < $scope.boardList.length; i++){
			if($scope.boardList[i].no == no){
				const param = {
					no			: $scope.boardList[i].no
					,name		: $scope.boardList[i].name
					,email		: $scope.boardList[i].email
					,gender		: $scope.boardList[i].gender
					,title		: $scope.boardList[i].title
					,contnet	: $scope.boardList[i].contnet
				};
				bdService.removeBoard(param).then(function(res){
					$scope.initBoardList();
				});
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}