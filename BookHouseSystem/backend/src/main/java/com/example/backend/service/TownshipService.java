package com.example.backend.service;

import com.example.backend.repository.TownshipDao;
import com.example.backend.model.FilterItem;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TownshipService {
    private final TownshipDao townshipDao;

    public TownshipService(TownshipDao townshipDao) {
        this.townshipDao = townshipDao;
    }

    public List<FilterItem> getTownship() {
        return townshipDao.getTownship();
    }
}
