package com.example.backend.controller;

import com.example.backend.model.FilterItem;
import com.example.backend.service.MRTService;
import com.example.backend.service.SchoolService;
import com.example.backend.service.TownshipService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FilterController {
    private final TownshipService townshipService;
    private final SchoolService schoolService;
    private final MRTService mrtService;

    public FilterController(TownshipService townshipService, SchoolService schoolService, MRTService mrtService) {
        this.townshipService = townshipService;
        this.schoolService = schoolService;
        this.mrtService = mrtService;
    }

    @RequestMapping(value = "/township")
    public List<FilterItem> getTownship() {
        return townshipService.getTownship();
    }

    @RequestMapping(value = "/school")
    public List<FilterItem> getSchool() {
        return schoolService.getSchool();
    }

    @RequestMapping(value = "/mrt")
    public List<FilterItem> getMRT() {
        return mrtService.getMRT();
    }
}
