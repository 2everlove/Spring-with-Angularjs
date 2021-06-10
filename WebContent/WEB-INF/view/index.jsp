<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<body>
	hello world
	
	${mbId}
	
	<br/>
	mbId: ${memberBean.mbId} <br/>
	mbPw: ${memberBean.mbPw} <br/> 
	
	<a href="/SpringWebTest/member/insertMemberForm.do">회원가입</a>&nbsp;&nbsp;&nbsp;
	<a href="/SpringWebTest/member/loginForm.do">로그인</a>&nbsp;&nbsp;&nbsp;
	
</body>
</html> 