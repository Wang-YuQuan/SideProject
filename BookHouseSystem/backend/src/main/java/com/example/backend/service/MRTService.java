package com.example.backend.service;

import com.example.backend.model.FilterItem;
import com.example.backend.repository.MRTDao;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MRTService {
    private final MRTDao mrtDao;

    public MRTService(MRTDao mrtDao) {
        this.mrtDao = mrtDao;
    }

    public List<FilterItem> getMRT() {
        return mrtDao.getMRT();
    }
}
