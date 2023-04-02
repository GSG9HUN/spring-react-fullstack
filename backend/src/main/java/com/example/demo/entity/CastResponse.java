package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CastResponse {

    public CastResponse() {
    }

    @Id
    private int id;
    private Crew[] crew;
    private Cast[] cast;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Crew[] getCrew() {
        return crew;
    }

    public void setCrew(Crew[] crew) {
        this.crew = crew;
    }

    public Cast[] getCast() {
        return cast;
    }

    public void setCast(Cast[] cast) {
        this.cast = cast;
    }
}
