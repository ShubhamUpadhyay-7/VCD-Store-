package com.springboot.vcd.modal;


import jakarta.persistence.*;

@Entity
public class UserCart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CartId;
	
    @ManyToOne
    @JoinColumn(name = "id")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "vcdid")
    private VCDDetails vcdDetails;

    private int quantity;

	public Long getCartId() {
		return CartId;
	}

	public void setCartId(Long cartId) {
		CartId = cartId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public VCDDetails getVcdDetails() {
		return vcdDetails;
	}

	public void setVcdDetails(VCDDetails vcdDetails) {
		this.vcdDetails = vcdDetails;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public UserCart(Long cartId, User user, VCDDetails vcdDetails, int quantity) {
		super();
		CartId = cartId;
		this.user = user;
		this.vcdDetails = vcdDetails;
		this.quantity = quantity;
	}

	public UserCart() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}

