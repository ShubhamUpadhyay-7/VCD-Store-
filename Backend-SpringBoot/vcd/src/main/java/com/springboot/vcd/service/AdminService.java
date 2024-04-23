package com.springboot.vcd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.vcd.modal.Admin;
import com.springboot.vcd.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    public void saveAdmin(Admin admin) {
        adminRepository.save(admin);
    }
    public Admin verifyAdmin(String username, String password) {
        return adminRepository.findByUsernameAndPassword(username, password);
    }
}