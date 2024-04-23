package com.springboot.vcd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.vcd.modal.VCDDetails;
import com.springboot.vcd.repository.VCDDetailsRepository;

import java.util.List;

@Service
public class VCDDetailsService {

    @Autowired
    private VCDDetailsRepository vcdDetailsRepository;

    public List<VCDDetails> getAllVCDDetails() {
        return vcdDetailsRepository.findAll();
    }

    public VCDDetails getVCDDetailsById(Long id) {
        return vcdDetailsRepository.findById(id).orElse(null);
    }

    public VCDDetails addVCDDetails(VCDDetails vcdDetails) {
        return vcdDetailsRepository.save(vcdDetails);
    }

    public VCDDetails updateVCDDetails(Long id, VCDDetails updatedVCDDetails) {
        VCDDetails existingVCDDetails = vcdDetailsRepository.findById(id).orElse(null);

        if (existingVCDDetails != null) {
            existingVCDDetails.setVcdName(updatedVCDDetails.getVcdName());
            existingVCDDetails.setLanguage(updatedVCDDetails.getLanguage());
            existingVCDDetails.setCategory(updatedVCDDetails.getCategory());
            existingVCDDetails.setRating(updatedVCDDetails.getRating());
            existingVCDDetails.setQuantity(updatedVCDDetails.getQuantity());
            existingVCDDetails.setCost(updatedVCDDetails.getCost());

            return vcdDetailsRepository.save(existingVCDDetails);
        }

        return null;
    }

    public void deleteVCDDetails(Long id) {
        vcdDetailsRepository.deleteById(id);
    }
    
    public List<VCDDetails> findByVCDName(String vcdName) {
        return vcdDetailsRepository.findByVcdNameContaining(vcdName);
    }

    public List<VCDDetails> findByCategory(String category) {
        return vcdDetailsRepository.findByCategory(category);
    }

    public List<VCDDetails> findByRating(String rating) {
        return vcdDetailsRepository.findByRating(rating);
    }

    public List<VCDDetails> findByLanguage(String language) {
        return vcdDetailsRepository.findByLanguage(language);
    }
    
    public VCDDetails updateQuantity(Long id, int newQuantity) {
        VCDDetails existingVCDDetails = vcdDetailsRepository.findById(id).orElse(null);

        if (existingVCDDetails != null) {
            existingVCDDetails.setQuantity(newQuantity);

            return vcdDetailsRepository.save(existingVCDDetails);
        }

        return null;
    }

}
