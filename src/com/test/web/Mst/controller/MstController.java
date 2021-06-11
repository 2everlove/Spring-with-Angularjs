package com.test.web.Mst.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.web.Mst.bean.Mst05Bean;
import com.test.web.Mst.dao.Mst05Dao;

@Controller
public class MstController {
	
	@Autowired
	private Mst05Dao mst05Dao;
	
	
	//초기 jsp 호출
	@RequestMapping("/")
	private String initPage() {
		return "MST/storage";
	}
	
	//popup jsp 호출
	@RequestMapping("/popup")
	private String popupPage() {
		return "MST/popup";
	}
	
	//검색
	@RequestMapping("/mst/selectMst050Ajax")
	@ResponseBody
	public Map<String, Object> 
	selectMst050Ajax(@RequestBody Mst05Bean vo)
	
	{
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", "false");
		m.put("resultMsg", "검색실패検索失敗");
		
		try {
			Mst05Bean vo2 = new Mst05Bean();
			vo2 = mst05Dao.selectMst05(vo);
			System.out.println(vo2);
			m.put("data", vo2);
			
			m.put("result", "true");
			m.put("resultMsg", "검색성공検索成功");
		}
		catch(Exception e) {
			e.printStackTrace();
			m.put("resultMsg", e.getMessage());
		}
		
		return m;
	}
	
	//등록
	@RequestMapping("/mst/regMst050Ajax")
	@ResponseBody
	public Map<String, Object> 
	regMst050Ajax(@RequestBody Mst05Bean vo)
	
	{
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", "false");
		m.put("resultMsg", "추가실패追加失敗");
		try {
			int res = mst05Dao.regMst05(vo);
			if(res>0) {
				
				m.put("result", "true");
				m.put("resultMsg", "추가성공追加成功");
			} 
		}
		catch(Exception e) {
			e.printStackTrace();
			m.put("resultMsg", e.getMessage());
		}
		
		return m;
	}
	
	//삭제
	@RequestMapping("/mst/deleteMst050Ajax")
	@ResponseBody
	public Map<String, Object> 
	deleteMst050Ajax(@RequestBody Mst05Bean vo)
	
	{
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", "false");
		m.put("resultMsg", "삭제실패削除失敗");
		try {
			int res = mst05Dao.deleteMst05(vo);
			if(res>0) {
				
				m.put("result", "true");
				m.put("resultMsg", "삭제성공削除成功");
			} 
		}
		catch(Exception e) {
			e.printStackTrace();
			m.put("resultMsg", e.getMessage());
		}
		
		return m;
	}
	
	//수정
	@RequestMapping("/mst/updateMst050Ajax")
	@ResponseBody
	public Map<String, Object> 
	updateMst050Ajax(@RequestBody Mst05Bean vo)
	
	{
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", "false");
		m.put("resultMsg", "수정실패修正失敗");
		try {
			int res = mst05Dao.updateMst05(vo);
			if(res>0) {
				
				m.put("result", "true");
				m.put("resultMsg", "수정성공修正成功");
			} 
		}
		catch(Exception e) {
			e.printStackTrace();
			m.put("resultMsg", e.getMessage());
		}
		
		return m;
	}
	
	//모두 조회
	@RequestMapping("/mst/mstListAjax")
	@ResponseBody
	public ArrayList<Mst05Bean> 
	mstListAjax(@RequestBody Mst05Bean vo)
	
	{
		ArrayList<Mst05Bean> mstList = mst05Dao.listMst05(vo);
		
		return mstList;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}

