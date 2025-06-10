package com.example.backend.model;

public class FilterItem {
    private int id;
    private String name;

    public FilterItem() {
        id = 0;
        name = "";
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}
