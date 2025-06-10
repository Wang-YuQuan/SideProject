package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MRTDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public MRTDao(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<FilterItem> getMRT() {
        String sql = "SELECT id, name FROM MRT_NAME";
        Map<String, Object> params = new HashMap<>();
        MRTRowMapper rowMapper = new MRTRowMapper();
        return namedParameterJdbcTemplate.query(sql, params, rowMapper);
    }
}
