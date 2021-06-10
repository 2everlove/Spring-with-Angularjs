<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>boardList</title>
<script src="../js/jquery-3.4.1.js"></script>
<script src="../js/angular.min.js"></script>
<script src="../js/bdApp.js"></script>
<script src="../js/bdController.js"></script>

</head>
<body>
	<div ng-app="bdApp" ng-controller="bdController"
		ng-init="initBoardList();">
		<form ng-submit="addBoard()">
			이름: <input type="text" ng-model="boardForm.name"> 
				<br /> 
			이메일: <input type="email" ng-model="boardForm.email"> 
				<br /> 
			성별: <input type="radio" id="female" name="gender" value="Female" ng-model="boardForm.gender"> 
					<label for="female">여자</label>
				<input type="radio" id="male" name="gender" value="Male" ng-model="boardForm.gender"> 
				<label for="male">남자</label> 
				<br />
			제목 : <input type="text" ng-model="boardForm.title"> 
				<br /> 
			내용 : <input type="text" ng-model="boardForm.content"> 
				<br />
			<button type="submit">추가</button>
		</form>
		<table border="1">
			<tr>
                <td style="width : 50px">No.</td>
                <td style="width: 200px">이름</td>
                <td style="width: 200px">이메일</td>
                <td style="width: 80px">성별</td>
                <td style="width : 200px">제목</td>
				<td style="width: 50px"></td>
				<td style="width: 50px"></td>
			</tr>
			<tr ng-repeat="item in boardList">
				<td style="width: 50px">{{item.no}}</td>
				<td style="width : 200px">{{item.name}}</td>
                <td style="width : 50px">{{item.email}}</td>
                <td style="width : 200px">{{item.gender}}</td>
                <td style="width : 50px">{{item.title}}</td>
				<td style="width: 50px">
					<button type="button" ng-click="detailBoardView(item.no)">
						상세보기</button>
				</td>
				<td style="width: 50px">
					<button type="button" ng-click="removeBoard(item.no)">삭제</button>
				</td>
			</tr>
		</table>

		<table border="1" ng-show="isBtnClick" ng-model="detail">
                <tr>
                    <td style="width : 50px">No</td>
                    <td style="width : 400px"><input data-ng-model="detail.no" readonly></td>
                </tr>
                <tr>
                    <td style="width : 50px">이름</td>
                    <td style="width : 400px"><input data-ng-model="detail.name"></td>
                </tr>
                <tr>
                    <td style="width : 50px">이메일</td>
                    <td style="width : 400px"><input data-ng-model="detail.email"></td>
                </tr>
                <tr>
                    <td style="width : 50px">성별</td>
                    <td style="width : 400px">
                        <input type="radio" id="female" name="gender" value="Female" ng-model="detail.gender">
                        <label for="female">여자</label>
                        <input type="radio" id="male" name="gender" value="Male" ng-model="detail.gender">
                        <label for="male">남자</label>
                    </td>
                </tr>
                <tr>
                    <td style="width : 50px">제목</td>
                    <td style="width : 400px"><input data-ng-model="detail.title"></td>
                </tr>
                <tr>
                    <td style="width : 50px">내용</td>
                    <td style="width : 400px"><input data-ng-model="detail.content"></td>
                </tr>
         </table>
         <button type="button" data-ng-click="updateBoard(detail.no);">수정하기</button>
	</div>
</body>
</html>