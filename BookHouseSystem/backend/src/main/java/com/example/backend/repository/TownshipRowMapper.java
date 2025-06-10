package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import com.example.backend.model.Township;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TownshipRowMapper implements RowMapper<FilterItem> {
    @Override
    public Township mapRow(ResultSet rs, int rowNum) throws SQLException {
        Township township = new Township();
        township.setId(rs.getInt("id"));
        township.setName(rs.getString("name"));
        return township;
    }
}
