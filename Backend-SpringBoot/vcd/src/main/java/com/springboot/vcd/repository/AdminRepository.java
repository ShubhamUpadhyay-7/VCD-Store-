package com.springboot.vcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.vcd.modal.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByUsername(String username);

	Admin findByUsernameAndPassword(String username, String password);
}
