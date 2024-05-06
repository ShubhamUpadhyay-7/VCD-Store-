package com.springboot.vcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.vcd.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmailIdAndPassword(String emailId, String password);
}
