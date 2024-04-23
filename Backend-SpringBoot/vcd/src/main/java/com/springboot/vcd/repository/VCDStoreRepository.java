package com.springboot.vcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.vcd.modal.VCDStore;

public interface VCDStoreRepository extends JpaRepository<VCDStore, Long> {
	List<VCDStore> findByStateAndCity(String state, String city);
	
}

