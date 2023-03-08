package com.example.demo.service;

import com.example.demo.entity.MovieRate;
import com.example.demo.repository.MovieRateRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class MovieRateService {

    private final MovieRateRepository movieRateRepository;
    private static final Logger log = LoggerFactory.getLogger(MovieRateService.class);

    public MovieRateService(MovieRateRepository movieRateRepository) {
        this.movieRateRepository = movieRateRepository;
    }

    public void saveEntity() {
        MovieRate movieRate = new MovieRate();
        this.movieRateRepository.save(movieRate);
    }
}
