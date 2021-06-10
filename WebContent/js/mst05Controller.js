

'use strict';

mstApp.controller('mst05Controller', mstController);

mstController.$inject = ['$timeout','$rootScope','$scope','$http','mstService'];

function mstController($timeout, $rootScope, $scope, $http, mstService){
	
	//등록
	$scope.regMst050 = function(){
		//java Controller로 요청을 보낼 parameter 생성
		let sok_tel = $scope.cNumeric($scope.mst050.sok_tel);
		let sok_fax = $scope.cNumeric($scope.mst050.sok_fax);
		console.log(sok_tel);
		console.log(sok_fax);
		const param = {
			sok_cd			: $scope.mst050.sok_cd
			,sok_na1 		: $scope.mst050.sok_na1
			,sok_kana 		: $scope.mst050.sok_kana
			,sok_kbn 		: $scope.mst050.sok_kbn
			,sok_yubin 		: $scope.mst050.sok_yubin
			,sok_ju1		: $scope.mst050.sok_ju1
			,sok_ju2		: $scope.mst050.sok_ju2
			,sok_tel		: sok_tel
			,sok_fax		: sok_fax
			,sok_tantcd		: $scope.mst050.sok_tantcd
			,sok_jun		: $scope.mst050.sok_jun
		}
		
		console.log("regMst050_param : ", param);
		//bdSerivce에 addBoard를 요청 한 후, 결과값에 따라 후처리
		mstService.regMst050(param).then(function(res){
			if(res.result =="true"){
				alert(res.resultMsg)
				$scope.cleanMst050();
			} else {
				alert(res.resultMsg);				
			}
			//글 작성 완료 후 form 초기화
		});
	}
	
	//code로 수정
	$scope.updateMst050 = function(){
		let sok_tel = $scope.cNumeric($scope.mst050.sok_tel);
		let sok_fax = $scope.cNumeric($scope.mst050.sok_fax);
		console.log(sok_tel);
		console.log(sok_fax);
		const param = {
			sok_cd			: $scope.mst050.sok_cd
			,sok_na1 		: $scope.mst050.sok_na1
			,sok_kana 		: $scope.mst050.sok_kana
			,sok_kbn 		: $scope.mst050.sok_kbn
			,sok_yubin 		: $scope.mst050.sok_yubin
			,sok_ju1		: $scope.mst050.sok_ju1
			,sok_ju2		: $scope.mst050.sok_ju2
			,sok_tel		: sok_tel
			,sok_fax		: sok_fax
			,sok_tantcd		: $scope.mst050.sok_tantcd
			,sok_jun		: $scope.mst050.sok_jun
		}
		console.log("updateMst050_param : ", param);
		//bdSerivce에 addBoard를 요청 한 후, 결과값에 따라 후처리
		mstService.updateMst050(param).then(function(res){
			if(res.result =="true"){
				alert(res.resultMsg)
			} else {
				alert(res.resultMsg);				
			}
			//글 작성 완료 후 form 초기화
		});
	}

	//code로 검색
	$scope.selectMst050 = function(){
		var sok_cd = $scope.blank_check($scope.mst050.sok_cd);
		if(sok_cd && sok_cd.length <5){
			
			sok_cd = $scope.zeroPadding(sok_cd, 4);
			var param = {sok_cd : sok_cd};
			console.log("selectMst050_param : ", param);
			
			mstService.selectMst050(param).then(function(res){
				console.log("selectMst050_res : ", res);
				if(res.result == "true"){
					var d = $scope.blank_check(res.data);
					//data 있음
					console.log(d);
					if(d){
						$scope.viewData(d);
					}
					//data 없음
					else{
						alert(res.resultMsg+": データがありません");
					}
				}
				
				
			});
			
		}
	}
	
	//팝업 lnit
	$scope.initBoardList = function(){
		const param = {
		}
		mstService.mstList(param).then(function(res){
			$scope.mst050 = {
			sok_kana 		: null
			,sok_kbn 		: null
			}
			console.log("res : ",res);
			$scope.mstList = res;
		});
	}
	
	//팝업 sort,search
	$scope.sortList = function(data){
		
		console.log($scope.mst050);
		let kata = $scope.mst050.sok_kana !=null ? $scope.mst050.sok_kana:'';
		console.log("sortClick");
		const param = {
			sort : data
			,sok_kana 		: kata
			,sok_kbn 		: $scope.mst050.sok_kbn
		}
		mstService.mstList(param).then(function(res){
			console.log("res : ",res);
			$scope.mstList = res;
		});
	}
	
	
	//모델 form에 넣기
	$scope.viewData = function(data){
		if(data != null){
			$scope.mst050 = data;
		} else {
			alert("データがありません");
		}
	}
	
	//form 초기화
	$scope.cleanMst050 = function(){
		$scope.mst050 = {
			sok_cd			: null
			,sok_na1 		: null
			,sok_kana 		: null
			,sok_kbn 		: null
			,sok_yubin 		: null
			,sok_ju1		: null
			,sok_ju2		: null
			,sok_tel		: null
			,sok_fax		: null
			,sok_tantcd		: null
			,sok_jun		: null
		}
	}
	
	//code로 삭제
	$scope.deleteMst050 = function(){
		const param = {sok_cd : $scope.mst050.sok_cd};
		mstService.deleteMst050(param).then(function(res){
			if(res.result=="true"){
				alert(res.resultMsg);
				$scope.cleanMst050();
			} else {
				alert(res.resultMsg);
			}
		});
	}
	
	
	//validation
	$scope.blurClickSok = function(){
		var sok_cd = $scope.blank_check($scope.mst050.sok_cd);
		if(sok_cd > 0){
			$scope.selectMst050();
		}
	}
	
	$scope.blur_strValue = function(e, min, max){
		if(!isNaN(e.currentTarget.value)){
			let currentValue = $scope.cNumeric(e.currentTarget.value);
			console.log("cv"+e.currentTarget.value);
			console.log(e.currentTarget.id+""+min+" "+max+" "+currentValue);
			if(currentValue != "" || currentValue!=null){
			$scope.ch_str_val(e.currentTarget.id, currentValue, min, max);
			}
		}
		else {
			document.getElementById(e.currentTarget.id).value = "";
		}
	}
	
	$scope.postal = function(e){
		$scope.postal_code(e);
	}
	
	$('.numbersOnlyMinus').change(function(){
		
		$(this).val($scope.cNumeric($(this).val()));
	});
	
	
	
	
	
	////////////////////utility  functions////////////////////
	$scope.blank_check = function(str){
		if(str == null || str == "null"
			   || str == undefined || str == "undefined"
			   || str == '' || str == "" || str.length == 0
			   ){
				return null;
			}else{
				return str;
			}
		} 
	
	$scope.zeroPadding = function(n, width) {
		n = $scope.blank_check(n);
		if(n){
			n = '' + n;
			return n.length >= width ? n : new Array(width - n.length + 1)
													 .join('0') + n;
		}else return null;
	}
	
	$scope.ch_str_val = function(id, str, min, max){
		var nStr = $scope.blank_check($scope.cNumeric(str)) == null?null:1*str;
		console.log("nStr : ",nStr)
		if(nStr != null){
			console.log("in");
			if(nStr >= min && nStr <= max){
				$("#" + id).val(""+nStr);
			}
			else{
				alert("範囲以外の数字です。(範囲 : "+min+" ~ "+max+" )");
				$("#" + id).val(null);
			}	
		}
	}
	
	$scope.cNumeric = function(str){
		console.log(str)
		str = "" + str;
		
		if($scope.blank_check(str)){
			str = str.replace(/[^0-9]/g, "");
		}else{
			str = null;
		}
		return str;
	}
	
	$scope.postal_code = function(e){
		var id = e.target.id;
		var str = e.target.value;
		var nStr = '' + $scope.cNumeric(str);
		var aStr = [];
		var jStr = null;
		
		if(nStr != 'null'){
			if(nStr.length >= 3){
				if(e.keyCode != 8){
					aStr.push((nStr.trim().substring(0, 3)));
					aStr.push((nStr.trim().substring(3)));
				
					jStr = [aStr[0], aStr[1]].join('-');
				
					$("#" + id).val(jStr);
				
					console.log("postal_code_nStr : ", nStr);
					console.log("postal_code_aStr : ", aStr);
					console.log("postal_code_jStr : ", jStr);
				}		
			}else{		
				console.log("postal_code_nStr : ", nStr);
				$("#" + id).val(nStr);
			}
		}
	}
	
	
	
};

