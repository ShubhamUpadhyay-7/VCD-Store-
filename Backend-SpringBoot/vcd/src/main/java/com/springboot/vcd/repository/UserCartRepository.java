package com.springboot.vcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.vcd.modal.User;
import com.springboot.vcd.modal.UserCart;
import com.springboot.vcd.modal.VCDDetails;

@Repository
public interface UserCartRepository extends JpaRepository<UserCart, Long> {
	UserCart findByUserAndVcdDetails(User user, VCDDetails vcdDetails);
    List<UserCart> findByUserId(Long userId);


}


