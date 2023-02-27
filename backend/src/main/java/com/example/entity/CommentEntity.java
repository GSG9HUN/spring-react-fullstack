package com.example.entity;

import org.springframework.data.annotation.Id;

public class CommentEntity {

    @Id
    private int id;

    private String comment;
    private String movieID;
}
