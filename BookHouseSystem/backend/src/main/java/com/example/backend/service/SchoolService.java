package com.example.backend.service;

import com.example.backend.model.FilterItem;
import com.example.backend.repository.SchoolDao;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SchoolService {
    private final SchoolDao schoolDao;

    public SchoolService(SchoolDao schoolDao) {
        this.schoolDao = schoolDao;
    }

    public List<FilterItem> getSchool() {
        return schoolDao.getSchool();
    }
}
