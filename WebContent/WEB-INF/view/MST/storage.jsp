<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<script src="../js/jquery-3.4.1.js"></script>
	<script src="../js/angular.min.js"></script>
	<script src="../js/mstApp.js"></script>
	<script src="../js/mst05Controller.js"></script>
	
	<script type="text/javascript">
		var checkPop = 'sok_cd';
		
		 function popup(){
	            let url = "/popup";
	            let name = "マスター";
	            let option = "width = 500, height = 500, top = 100, left = 200, location = no"
	            window.open(url, name, option);
	        }
	</script>
</head>
<body>		 
	<!--contents-->
	
	<div data-ng-App="mstApp" id="mst05Controller"
	  	 data-ng-controller="mst05Controller"
	  	 data-ng-init="initBoardList()">
		<div class="">
			<div class="tit_wrap">
                <div class="title tit1">マスタ</div>
                <!--navigation-->
                <dl class="navigation">
                    <dt>マスタ</dt>
                    <dd><a href="#">倉庫マスタ</a></dd>
                </dl>
                <!--navigation-->
            </div>
            
			<!-- contentsbox start -->
			<div class="contents_box">
					<div class="board_table table_500">
						<table ng-model="mst050">
							<colgroup>
								<col style="width:35%;">
							</colgroup>
							<tr>
								<th>倉庫コード</th>
								<td class="td_left">
									<input type="text" class="numbersOnlyExceptDot" maxlength="4" 
										   style="width: 15%;" id="sok_cd" 
										   data-ng-model = "mst050.sok_cd"
										   data-ng-blur="blurClickSok();">
								</td>
							</tr>
							<tr>
								<th>倉庫名</th>
								<td class="td_left">
									<input type="text" id="sok_na1" class="input_accent5" 
										   style="width: 40%;" id="sok_na1" maxlength="60"
										   data-ng-model="mst050.sok_na1">
								</td>
							</tr>
							<tr>
								<th>倉庫名カナ</th>
								<td class="td_left">
									<input type="text" class="input_accent6"   
									  	   style="width: 30%;" id="sok_kana" maxlength="60"
										   data-ng-model="mst050.sok_kana">
								</td>
								
							</tr>
							<!-- table에 없으므로 삭제 - 20201023 anisssoft -->
							<!--
							<tr>
								<th>倉庫名略称</th>
								<td class="td_left">
									
										<input type="text" class="input_accent6" style="width: 30%;"data-ng-model = "mst050.sok_cd">
									
								</td>
							</tr>
							-->
							<tr>
								<th>倉庫区分</th>
								<td class="td_left" colspan="2">
									<input type="text" class="input_xxs input_accent6 align_center numbersOnlyExceptDot" 
											id="sok_kbn" data-ng-model = "mst050.sok_kbn"
											data-ng-keydown="strValue($event, 1, 6);"
										    data-ng-blur="blur_strValue($event, 1, 6);"
										    maxlength="1">
									<span class="input_standard">(1:自社倉庫　2:その他　3:秀託　4:預り　5:加工　6:特産品)</span>
								</td>
							</tr>
							<tr>
								<th>郵便番号</th>
								<td class="td_left">
									<input type="text" style="width: 40%;" class="numbersOnlyMinus"
										   id="sok_yubin" maxlength="10"
										   data-ng-keydown="postal($event);"
										   data-ng-model = "mst050.sok_yubin">
								</td>
							</tr>
							<tr>
								<th>住所1</th>
								<td class="td_left">
									<input type="text" style="width: 50%;"
											id="sok_ju1" maxlength="60"
											data-ng-model = "mst050.sok_ju1">									
								</td>
							</tr>
							<tr>
								<th>住所2</th>
								<td class="td_left">
									<input type="text" style="width: 50%;"
											id="sok_ju2" maxlength="60"
											data-ng-model = "mst050.sok_ju2">
								</td>
							</tr>
							<tr>
								<th>電話番号</th>
								<td class="td_left">
									<input type="text" style="width: 25%;"
										   class="numbersOnlyMinus" maxlength="15"
										   id="sok_tel" data-ng-model = "mst050.sok_tel">
								</td>
							</tr>
							<tr>
								<th>FAX番号</th>
								<td class="td_left">
									<input type="text" style="width: 25%;"
										   class="numbersOnlyMinus" maxlength="15"
										   id="sok_fax" data-ng-model = "mst050.sok_fax">
								</td>
							</tr>
							<tr>
								<th>担当者</th>
								<td class="td_left">
									<input type="text" style="width: 15%;" id="sok_tantcd"
										   class="numbersOnlyExceptDot" maxlength="4" 
										   data-ng-model = "mst050.sok_tantcd"
										   data-ng-blur = "blurClickTantcd();">	
									<input type="text" readonly class="input_accent2" id="tant_na1" 
										   style="width: 35%;" data-ng-model = "mst050.tant_na1">
									
								</td>
							</tr>
							<tr>
								<th>倉庫グループ</th>
								<td class="td_left" colspan="2">
									<input type="text" class="input_accent1 align_center"
											maxlength="8" style="width:15%"
											id="sok_jun" data-ng-model = "mst050.sok_jun">
									<span class="input_standard">並び順</span>
								</td>
							</tr>
						</table>
					</div>
					<!-- Button List -->
					<div class="fn_btns_set space1">
						<table style="border:1px solid black;">
							<colgroup>
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
							</colgroup>
							<tr>
								<th>F1</th>
								<th>F2</th>
								<th>F3</th>
								<th>F4</th>
							</tr>
							<tr>
								<td><button type="button" id="btn_p" data-ng-click="regMst050();">実行</button></td>
								<td><button type="button" data-ng-click="updateMst050();">修正</button></td>
								<td><button onclick="javascript:popup()">pop</button></td>
								<td><button type="button" data-ng-click="deleteMst050();">削除</button></td>
							</tr>
						</table>
						<table style="border:1px solid black;">
							<colgroup>
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
							</colgroup>
							<tr>
								<th>F5</th>
								<th>F6</th>
								<th>F7</th>
								<th>F8</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td><button type="button" data-ng-click="cleanMst050();">クリア</button></td>
							</tr>
						</table>
						<table>
							<colgroup>
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
								<col style="width:25%;">
							</colgroup>
							<tr>
								<th>F9</th>
								<th>F10</th>
								<th>F11</th>
								<th>F12</th>
							</tr>
							<tr>
								<!-- <td><button type="button">抽出</button></td> -->
								<td></td>
								<td></td>
								<!--<td><button type="button">終了</button></td> -->
							</tr>
						</table>
					</div>
					<!-- end Button List -->
		</div>
	</div>
	<!--contents-->
	</div>
	<!--팝업-->
</body>
</html>