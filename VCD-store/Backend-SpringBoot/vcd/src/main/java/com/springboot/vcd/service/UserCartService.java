package com.springboot.vcd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.vcd.modal.User;
import com.springboot.vcd.modal.UserCart;
import com.springboot.vcd.modal.VCDDetails;
import com.springboot.vcd.repository.UserCartRepository;

@Service
public class UserCartService {

    @Autowired
    private UserCartRepository userCartRepository;

    public List<UserCart> getAllUserCarts() {
        return userCartRepository.findAll();
    }

    public UserCart getUserCartById(Long id) {
        return userCartRepository.findById(id).orElse(null);
    }

    public void addUserCart(UserCart userCart) {
        userCartRepository.save(userCart);
    }

    public void updateUserCart(UserCart userCart) {
        userCartRepository.save(userCart);
    }

    public void deleteUserCart(Long cartid) {
        userCartRepository.deleteById(cartid);
    }
    public UserCart getUserCartByUserAndVcd(User user, VCDDetails vcdDetails) {
        return userCartRepository.findByUserAndVcdDetails(user, vcdDetails);
    }

    public List<UserCart> getUserCartItemsByUserId(Long userId) {
        return userCartRepository.findByUserId(userId);
    }
}
