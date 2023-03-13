package com.example.demo.controller;

import com.example.demo.service.MovieRateService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class MovieRateController {

    private static final Logger log = LoggerFactory.getLogger(MovieRateService.class);
    private MovieRateService movieRateService;

    public MovieRateController(MovieRateService movieRateService){
        this.movieRateService = movieRateService;
    }
}
