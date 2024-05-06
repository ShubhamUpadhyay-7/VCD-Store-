package com.springboot.vcd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.vcd.modal.VCDStore;
import com.springboot.vcd.repository.VCDStoreRepository;

import java.util.List;

@Service
public class VCDStoreService {

    @Autowired
    private VCDStoreRepository vcdStoreRepository;

    public List<VCDStore> getAllVCDStores() {
        return vcdStoreRepository.findAll();
    }

    public VCDStore getVCDStoreById(Long id) {
        return vcdStoreRepository.findById(id).orElse(null);
    }

    public VCDStore addVCDStore(VCDStore vcdStore) {
        return vcdStoreRepository.save(vcdStore);
    }

    public VCDStore updateVCDStore(Long id, VCDStore updatedVCDStore) {
        VCDStore existingVCDStore = vcdStoreRepository.findById(id).orElse(null);

        if (existingVCDStore != null) {
        	existingVCDStore.setStoreName(updatedVCDStore.getStoreName());
            existingVCDStore.setLocality(updatedVCDStore.getLocality());
            existingVCDStore.setCity(updatedVCDStore.getCity());
            existingVCDStore.setState(updatedVCDStore.getState());
            existingVCDStore.setPhoneNumber(updatedVCDStore.getPhoneNumber());

            return vcdStoreRepository.save(existingVCDStore);
        }

        return null;
    }

    public void deleteVCDStore(Long id) {
        vcdStoreRepository.deleteById(id);
    }
    public List<VCDStore> getStoresByStateAndCity(String state, String city) {
        return vcdStoreRepository.findByStateAndCity(state, city);
    }
}



