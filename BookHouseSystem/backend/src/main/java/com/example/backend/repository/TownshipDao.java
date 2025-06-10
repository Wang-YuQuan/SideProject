package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class TownshipDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public TownshipDao(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<FilterItem> getTownship() {
        String sql = "SELECT id, name FROM TOWNSHIP_NAME";
        Map<String, Object> params = new HashMap<>();
        TownshipRowMapper rowMapper = new TownshipRowMapper();
        return namedParameterJdbcTemplate.query(sql, params, rowMapper);
    }
}
