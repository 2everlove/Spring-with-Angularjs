package com.test.web.Mst.dao;

import java.util.ArrayList;

import com.test.web.Mst.bean.Mst05Bean;

public interface Mst05Dao {
	
	//code로 검색
	Mst05Bean selectMst05 (Mst05Bean vo) throws Exception;
	
	//등록
	int regMst05 (Mst05Bean vo) throws Exception;
	
	//삭제
	int deleteMst05(Mst05Bean vo) throws Exception;

	int updateMst05(Mst05Bean vo) throws Exception;

	ArrayList<Mst05Bean> listMst05(Mst05Bean vo);

}
