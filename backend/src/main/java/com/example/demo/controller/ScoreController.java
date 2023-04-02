package com.example.demo.controller;

import com.example.demo.entity.Score;
import com.example.demo.service.ScoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class ScoreController {

    private static final Logger log = LoggerFactory.getLogger(ScoreController.class);
    private final ScoreService movieRateService;

    public ScoreController(ScoreService movieRateService) {
        this.movieRateService = movieRateService;
    }

    @GetMapping("/score/{movieID}")
    public Double averagingScore(@PathVariable int movieID) {
        log.info("Get API function for avg score.");
        return this.movieRateService.getAvgMovieScoreByID(movieID);
    }

    @PostMapping("/score")
    public void storeScore(@RequestBody Score score) {
        log.info("Store API function.");
        this.movieRateService.storeMovieScore(score);
    }
}
