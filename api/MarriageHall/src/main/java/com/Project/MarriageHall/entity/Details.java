package com.Project.MarriageHall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "details")
public class Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "imgdata")
	private String imgdata;
	@Column(name = "address")
	private String address;
	@Column(name = "somedata")
	private String somedata;
	@Column(name = "price")
	private String price;
	@Column(name = "rating")
	private String rating;
	@Column(name = "arrimg")
	private String arrimg;
	@Column(name = "rname")
	private String rname;
	
	public Details() {
		
	 }

	public Details(String name, String imgdata, String address, String somedata, String price, String rating,
			String arrimg, String rname) {
	
		this.name = name;
		this.imgdata = imgdata;
		this.address = address;
		this.somedata = somedata;
		this.price = price;
		this.rating = rating;
		this.arrimg = arrimg;
		this.rname = rname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgdata() {
		return imgdata;
	}

	public void setImgdata(String imgdata) {
		this.imgdata = imgdata;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSomedata() {
		return somedata;
	}

	public void setSomedata(String somedata) {
		this.somedata = somedata;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getArrimg() {
		return arrimg;
	}

	public void setArrimg(String arrimg) {
		this.arrimg = arrimg;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	@Override
	public String toString() {
		return "Details [id=" + id + ", name=" + name + ", imgdata=" + imgdata + ", address=" + address + ", somedata="
				+ somedata + ", price=" + price + ", rating=" + rating + ", arrimg=" + arrimg + ", rname=" + rname
				+ "]";
	}

	
	
	}