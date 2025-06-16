package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SchoolDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public SchoolDao(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<FilterItem> getSchool() {
        String sql = "SELECT id, name FROM SCHOOL_NAME ORDER BY id ASC";
        Map<String, Object> params = new HashMap<>();
        SchoolRowMapper rowMapper = new SchoolRowMapper();
        return namedParameterJdbcTemplate.query(sql, params, rowMapper);
    }
}
