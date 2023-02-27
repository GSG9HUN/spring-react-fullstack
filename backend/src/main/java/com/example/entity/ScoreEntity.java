package com.example.entity;

import org.springframework.data.annotation.Id;

public class ScoreEntity {

    @Id
    private int id;
    private int score;
    private String movieID;


}
