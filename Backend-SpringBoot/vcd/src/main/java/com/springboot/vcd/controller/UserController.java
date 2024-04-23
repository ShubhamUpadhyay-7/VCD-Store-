package com.springboot.vcd.controller;

import org.springframework.web.bind.annotation.CrossOrigin;


import com.springboot.vcd.modal.User;
import com.springboot.vcd.modal.UserCart;
import com.springboot.vcd.modal.VCDDetails;
import com.springboot.vcd.modal.VCDStore;
import com.springboot.vcd.service.UserCartService;
import com.springboot.vcd.service.UserService;
import com.springboot.vcd.service.VCDDetailsService;
import com.springboot.vcd.service.VCDStoreService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private VCDStoreService vcdStoreService;
    
    @Autowired
    private VCDDetailsService vcdDetailsService;
    
    @Autowired
    private UserCartService userCartService;
    
   
    

    @PostMapping("/register")
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> verifyUser(@RequestParam String emailId, @RequestParam String password) {
        User verifiedUser = userService.verifyUser(emailId, password);
        if (verifiedUser != null) {
        	Long userId = verifiedUser.getId();
        	System.out.println(userId);
            return ResponseEntity.ok("User verified successfully! UserId:" + userId);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
    }
    
    @GetMapping("/findByStateAndCity")
    public List<VCDStore> findByStateAndCity(@RequestParam String state, @RequestParam String city) {
        return vcdStoreService.getStoresByStateAndCity(state, city);
    }
    
    //------------------------------------------
    
    @GetMapping("/searchByName")
    public List<VCDDetails> searchByVCDName(@RequestParam String vcdName) {
        return vcdDetailsService.findByVCDName(vcdName);
    }

    @GetMapping("/searchByCategory")
    public List<VCDDetails> searchByCategory(@RequestParam String category) {
        return vcdDetailsService.findByCategory(category);
    }

    @GetMapping("/searchByRating")
    public List<VCDDetails> searchByRating(@RequestParam String rating) {
        return vcdDetailsService.findByRating(rating);
    }

    @GetMapping("/searchByLanguage")
    public List<VCDDetails> searchByLanguage(@RequestParam String language) {
        return vcdDetailsService.findByLanguage(language);
    }
    
    //-------------------------------------------
    
    @PostMapping("/add-to-cart")
    public void addUserCart(@RequestParam Long id, @RequestParam Long vcdId, @RequestParam int quantity) {
    	User user=userService.getUserById(id);
    	VCDDetails vcdDetails=vcdDetailsService.getVCDDetailsById(vcdId);
    	UserCart existingCartEntry = userCartService.getUserCartByUserAndVcd(user, vcdDetails);
    	
    	if (existingCartEntry != null) {
            existingCartEntry.setQuantity(quantity);
            userCartService.addUserCart(existingCartEntry);
        } else {
            UserCart userCart = new UserCart();
            userCart.setUser(user);
            userCart.setVcdDetails(vcdDetails);
            userCart.setQuantity(quantity);
            
            userCartService.addUserCart(userCart);
        }
    }

    @DeleteMapping("/deletecart")
    public void deleteUserCart(@RequestParam Long id) {
        userCartService.deleteUserCart(id);
    }
    
    @GetMapping("/cart")
    public ResponseEntity<List<UserCart>> getUserCartItems(@RequestParam Long userId) {
        List<UserCart> userCartItems = userCartService.getUserCartItemsByUserId(userId);

        if (userCartItems.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(userCartItems);
    }
    
    @PostMapping("/payment")
    public ResponseEntity<String> placeOrder(
            @RequestParam Long userId
    ) {
        try {
        	List<UserCart> cartItems = userCartService.getUserCartItemsByUserId(userId);

            for (UserCart cartItem : cartItems) {
            	Long cartId= cartItem.getCartId();
                Long vcdID = cartItem.getVcdDetails().getVcdID();
                int quantity = vcdDetailsService.getVCDDetailsById(vcdID).getQuantity()-cartItem.getQuantity();
                vcdDetailsService.updateQuantity(vcdID, quantity);
                System.out.println(cartId);
                userCartService.deleteUserCart(cartId);
        	
            }

            return ResponseEntity.ok("Order placed successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error placing order: " + e.getMessage());
        }
    }
}
