package com.example.demo.service;

import com.example.demo.entity.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MainService {

    private static final Logger log = LoggerFactory.getLogger(MainService.class);

    public String getResultAsString(String url) {
        return (new RestTemplate()).getForObject(url, String.class);
    }


    public Movie getSpecificMovie(String url) {
        return (new RestTemplate()).getForObject(url, Movie.class);
    }
}
