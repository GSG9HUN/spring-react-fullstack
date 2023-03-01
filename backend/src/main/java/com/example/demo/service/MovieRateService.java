package com.example.demo.service;

import com.example.demo.entity.MovieRate;
import com.example.demo.repository.MovieRateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieRateService {

    private final MovieRateRepository movieRateRepository;


    public MovieRateService(MovieRateRepository movieRateRepository) {
        this.movieRateRepository = movieRateRepository;
    }

    public void saveEntity() {
        MovieRate movieRate = new MovieRate();
        this.movieRateRepository.save(movieRate);
    }
}
