package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

import java.lang.reflect.Array;

public class Movie {
    public Movie() {

    }
    @Id
    private int ID;
    @Column
    private String poster_path;
    @Column
    private String title;
    @Column
    private String overview;
    @Column
    private String imdb_id;
    @Column
    private String homepage;
    @Column
    private Array genres;


    public String getPosterPath() {
        return poster_path;
    }

    public void setPosterPath(String poster_path) {
        this.poster_path = poster_path;
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

    public String getImdb_id() {
        return imdb_id;
    }

    public void setImdb_id(String imdb_id) {
        this.imdb_id = imdb_id;
    }

    public String getHomepage() {
        return homepage;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public Array getGenres() {
        return genres;
    }

    public void setGenres(Array genres) {
        this.genres = genres;
    }
}
