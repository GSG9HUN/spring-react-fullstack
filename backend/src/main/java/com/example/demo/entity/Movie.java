package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class Movie {


    public Movie(){

    }
    @Id
    private int ID;
    @Column
    private String posterPath;
    @Column
    private String title;
    @Column
    private String overview;
    @Column
    private int page;
    @Column
    private String results;

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public String getResults() {
        return results;
    }

    public void setResults(String results) {
        this.results = results;
    }
}
