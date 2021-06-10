package com.test.web.board.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.web.board.bean.BoardBean;
import com.test.web.board.dao.BoardDao;

@Controller
public class BoardController {
	
	@Autowired
	private BoardDao boardDao;
	
//	//jsp page호출(selectBoardList.jsp 호출)
//	@RequestMapping("/")
//	public String selectBoardListJsp() throws Exception{
//		return "/board/selectBoardList";
//	}
//	
	
	//글작성
	@RequestMapping("/board/addBoard")
	public void addBoard(@RequestBody BoardBean model) 
	throws Exception{
		boardDao.addBoard(model);
	}
	
	//게시글 리스트 보기
	@RequestMapping("/board/selectBoardList")
	@ResponseBody
	public ArrayList<BoardBean> selectBoardList()
	throws Exception{
		ArrayList<BoardBean> boardList = 
				new ArrayList<BoardBean>();
		
		boardList = boardDao.selectBoardList();
		System.out.println("boardList : "+boardList);
		return boardList;
	}
	
	//게시글 수정
	@RequestMapping("/board/updateBoard")
	public void updateBoard(@RequestBody BoardBean model)
	throws Exception{
		boardDao.updateBoard(model);
	}
	
	//게시글 삭제
	@RequestMapping("/board/removeBoard")
	public void removeBoard(@RequestBody BoardBean model)
	throws Exception{
		boardDao.removeBoard(model);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
