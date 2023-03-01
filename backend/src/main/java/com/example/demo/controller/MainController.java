package com.example.demo.controller;

import com.example.demo.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {


    private static final Logger log = LoggerFactory.getLogger(MainController.class);
    private MainService mainService;

    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @Value("${api.key}")
    private String apiKey;
    @Value("${api.url}")
    private String apiURL;

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
