package com.example.demo.entity;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Comment implements Serializable {


    public Comment() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    @Column
    private int movieID;
    @Column
    private String comment;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getMovieID() {
        return movieID;
    }

    public void setMovieID(int movieID) {
        this.movieID = movieID;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
