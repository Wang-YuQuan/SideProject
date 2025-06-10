package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import com.example.backend.model.School;
import com.example.backend.model.Township;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SchoolRowMapper implements RowMapper<FilterItem> {

    @Override
    public FilterItem mapRow(ResultSet rs, int rowNum) throws SQLException {
        School school = new School();
        school.setId(rs.getInt("id"));
        school.setName(rs.getString("name"));
        return school;
    }
}
