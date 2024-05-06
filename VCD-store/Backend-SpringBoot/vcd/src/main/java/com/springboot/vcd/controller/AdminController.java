package com.springboot.vcd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.vcd.modal.Admin;
import com.springboot.vcd.modal.VCDDetails;
import com.springboot.vcd.modal.VCDStore;
import com.springboot.vcd.service.AdminService;
import com.springboot.vcd.service.VCDDetailsService;
import com.springboot.vcd.service.VCDStoreService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    
    @Autowired
    private VCDStoreService vcdStoreService;
    
    @Autowired
    private VCDDetailsService vcdDetailsService;

    @GetMapping("/{username}")
    public ResponseEntity<Admin> getAdminByUsername(@PathVariable String username) {
        Admin admin = adminService.findByUsername(username);
        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginAdmin(@RequestBody Admin admin) {
        Admin verifiedAdmin = adminService.verifyAdmin(admin.getUsername(), admin.getPassword());
        if (verifiedAdmin != null) {
            return ResponseEntity.ok("admin logged in successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");
        }
    }
    
    @GetMapping("/vcdstores")
    public List<VCDStore> getAllVCDStores() {
        return vcdStoreService.getAllVCDStores();
    }
    
    @GetMapping("/vcdstores/{id}")
    public VCDStore getVCDStoreById(@PathVariable Long id) {
        return vcdStoreService.getVCDStoreById(id);
    }


    @PostMapping("/vcdstores")
    public VCDStore addVCDStore(@RequestBody VCDStore vcdStore) {
        return vcdStoreService.addVCDStore(vcdStore);
    }

    @PutMapping("/vcdstores/{id}")
    public VCDStore updateVCDStore(@PathVariable Long id, @RequestBody VCDStore vcdStore) {
        return vcdStoreService.updateVCDStore(id, vcdStore);
    }

    @DeleteMapping("/vcdstores/{id}")
    public void deleteVCDStore(@PathVariable Long id) {
        vcdStoreService.deleteVCDStore(id);
    }
    
    
    
    @GetMapping("/vcddetails")
    public List<VCDDetails> getAllVCDDetails() {
        return vcdDetailsService.getAllVCDDetails();
    }

    @GetMapping("/vcddetails/{id}")
    public VCDDetails getVCDDetailsById(@PathVariable Long id) {
        return vcdDetailsService.getVCDDetailsById(id);
    }

    @PostMapping("/vcddetails")
    public VCDDetails addVCDDetails(@RequestBody VCDDetails vcdDetails) {
        return vcdDetailsService.addVCDDetails(vcdDetails);
    }
    
    @PutMapping("/vcddetails/{id}")
    public VCDDetails updateVCDDetails(@PathVariable Long id, @RequestBody VCDDetails vcdDetails) {
        return vcdDetailsService.updateVCDDetails(id, vcdDetails);
    }

    @DeleteMapping("/vcddetails/{id}")
    public void deleteVCDDetails(@PathVariable Long id) {
        vcdDetailsService.deleteVCDDetails(id);
    }
}


