package com.example.demo.controller;

import com.example.demo.service.MainService;
import com.example.demo.service.MovieRateService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    @Value("${api.key}")
    private String apiKey;
    @Value("${api.url}")
    private String apiURL;
    private MainService mainService;
    private MovieRateService movieRateService;

    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("/getPopularMovies")
    public String getPopularMovies(@RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        return this.mainService.getResultAsString(this.apiURL + "movie/popular?api_key=" + this.apiKey + "&page=" + pageNumber);
        //return this.apiURL + "movie/popular?api_key=" + this.apiKey;
        //return restTemplate.getForObject(this.apiURL + "movie/popular?api_key=" + this.apiKey, Movie.class);
        //log.info("request sent to movie api")
    }

    @GetMapping("/getMovie/{id}")
    public int getSpecificMovie(@RequestParam(value = "id") int id) {
        return id;
        //return this.mainService.getSpecificMovie(this.apiURL + "movie/" + id + "?api_key=" + this.apiKey);
    }
}
