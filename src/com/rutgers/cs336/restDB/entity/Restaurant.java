package com.rutgers.cs336.restDB.entity;

import java.sql.Time;

public class Restaurant {
	
	private String id;
	private String name;
	private String address;
	private String phone;
	private String website;
	private String cuisine;
	private int distFromCity;
	private double rating;
	private int avgPrice;
	private Time openTime;
	private Time closeTime;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getCuisine() {
		return cuisine;
	}
	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}
	public int getDistFromCity() {
		return distFromCity;
	}
	public void setDistFromCity(int distFromCity) {
		this.distFromCity = distFromCity;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public int getAvgPrice() {
		return avgPrice;
	}
	public void setAvgPrice(int avgPrice) {
		this.avgPrice = avgPrice;
	}
	public Time getOpenTime() {
		return openTime;
	}
	public void setOpenTime(Time openTime) {
		this.openTime = openTime;
	}
	public Time getCloseTime() {
		return closeTime;
	}
	public void setCloseTime(Time closeTime) {
		this.closeTime = closeTime;
	}
	
	@Override
	public String toString() {
		return "Restaurant [id=" + id + ", name=" + name + ", address="
				+ address + ", phone=" + phone + ", website=" + website
				+ ", cuisine=" + cuisine + ", distFromCity=" + distFromCity
				+ ", rating=" + rating + ", avgPrice=" + avgPrice
				+ ", openTime=" + openTime + ", closeTime=" + closeTime + "]";
	}

}
