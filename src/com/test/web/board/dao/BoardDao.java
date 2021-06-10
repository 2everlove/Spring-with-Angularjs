package com.test.web.board.dao;

import java.util.ArrayList;

import com.test.web.board.bean.BoardBean;

public interface BoardDao {

	void addBoard(BoardBean model);

	ArrayList<BoardBean> selectBoardList();

	void updateBoard(BoardBean model);

	void removeBoard(BoardBean model);
		
}
