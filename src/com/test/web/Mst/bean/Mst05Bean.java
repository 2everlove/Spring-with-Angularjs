package com.test.web.Mst.bean;

import lombok.Data;

@Data
public class Mst05Bean {
	private int num;
	private String sort;
	private String sok_cd; //倉庫コード(code)
	private String sok_na1; //倉庫名(name)
	private String sok_kana;//倉庫名カナ(gatakana name)
	private int sok_kbn;//倉庫区分(classification)
	private String sok_yubin;//郵便番号(zip code)
	private String sok_ju1;//住所1(Address 1)
	private String sok_ju2;//住所2(Address 2)
	private String sok_tel;//電話番号(phone number)
	private String sok_fax;//FAX番号(FAX number)
	private String tant_na1;//担当者(manager) fk
	private String sok_jun;//倉庫グループ（並び順）(group-order)
	private String sok_tokcd;//拠点得意先コード(customer code) fk
	private String sok_sircd;//拠点仕入先コード(supplier code) fk
	
}
