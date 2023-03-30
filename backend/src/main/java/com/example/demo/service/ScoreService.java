package com.example.demo.service;

import com.example.demo.entity.Score;
import com.example.demo.repository.ScoreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.stream.Collectors;

@Service
public class ScoreService {

    private final ScoreRepository scoreRepository;
    private static final Logger log = LoggerFactory.getLogger(ScoreService.class);

    public ScoreService(ScoreRepository movieRateRepository) {
        this.scoreRepository = movieRateRepository;
    }

    public void storeMovieScore(Score score) {
        this.scoreRepository.save(score);
    }

    public Double getAvgMovieScoreByID(int movieID) {
        return Arrays.stream(this.scoreRepository.findAllByMovieID(movieID)).collect(Collectors.averagingDouble(Score::getScore));
    }
}
