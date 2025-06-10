package com.example.backend.repository;

import com.example.backend.model.FilterItem;
import com.example.backend.model.MRT;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MRTRowMapper implements RowMapper<FilterItem> {
    public MRT mapRow(ResultSet rs, int rowNum) throws SQLException {
        MRT mrt = new MRT();
        mrt.setId(rs.getInt("id"));
        mrt.setName(rs.getString("name"));
        return mrt;
    }
}
