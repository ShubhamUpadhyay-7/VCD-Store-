package com.springboot.vcd.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class VCDStore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storeID;
    private String storeName;
    private String locality;
    private String city;
    private String state;
    private String phoneNumber;
	public Long getStoreID() {
		return storeID;
	}
	public void setStoreID(Long storeID) {
		this.storeID = storeID;
	}
	
	public String getStoreName() {
		return storeName;
	}
	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public VCDStore(Long storeID, String storeName, String locality, String city, String state, String phoneNumber) {
		super();
		this.storeID = storeID;
		this.storeName = storeName;
		this.locality = locality;
		this.city = city;
		this.state = state;
		this.phoneNumber = phoneNumber;
	}
	public VCDStore() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}