package com.springboot.vcd.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class VCDDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vcdID;
    private String vcdName;
    private String language;
    private String category;
    private String rating;
    private int quantity;
    private double cost;
	public Long getVcdID() {
		return vcdID;
	}
	public void setVcdID(Long vcdID) {
		this.vcdID = vcdID;
	}
	public String getVcdName() {
		return vcdName;
	}
	public void setVcdName(String vcdName) {
		this.vcdName = vcdName;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public VCDDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public VCDDetails(Long vcdID, String vcdName, String language, String category, String rating, int quantity,
			double cost) {
		super();
		this.vcdID = vcdID;
		this.vcdName = vcdName;
		this.language = language;
		this.category = category;
		this.rating = rating;
		this.quantity = quantity;
		this.cost = cost;
	}
    
    
}

