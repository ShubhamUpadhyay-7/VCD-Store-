package com.springboot.vcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.vcd.modal.VCDDetails;

public interface VCDDetailsRepository extends JpaRepository<VCDDetails, Long> {
	
	List<VCDDetails> findByVcdNameContaining(String vcdName);
    List<VCDDetails> findByCategory(String category);
    List<VCDDetails> findByRating(String rating);
    List<VCDDetails> findByLanguage(String language);
}

