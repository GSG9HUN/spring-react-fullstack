package com.example.demo.controller;

import com.example.demo.service.CommentService;
import com.example.demo.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class MainController {

    @Value("${api.key}")
    private String apiKey;
    @Value("${api.url}")
    private String apiURL;
    private final MainService mainService;
    private static final Logger log = LoggerFactory.getLogger(CommentService.class);

    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("/getPopularMovies")
    public String getPopularMovies(@RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        log.info("Get Popular movies api endpoint called.");
        return this.mainService.getResultAsString(this.apiURL + "movie/popular?api_key=" + this.apiKey + "&page=" + pageNumber);
    }

    @GetMapping("/getMovie/{id}")
    public String getSpecificMovie(@PathVariable int id) {
        log.info("Get specific movie details api endpoint called.");
        return this.mainService.getSpecificMovie(this.apiURL + "movie/" + id + "?api_key=" + this.apiKey);
    }

    @GetMapping("/getActors/{movieID}")
    public String getActors(@PathVariable int movieID) {
        log.info("Get actors api endpoint called.");
        return this.mainService.getActorsToMovie(this.apiURL + "movie/" + movieID + "/credits?api_key=" + this.apiKey);
    }

    @GetMapping("/getMovieByName")
    public String getMovieByName(@RequestParam(value = "name") String name, @RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        log.info("Movie search api endpoint called.");
        return this.mainService.getMovieByName(this.apiURL + "search/movie?api_key=" + this.apiKey + "&query=" + name + "&page=" + pageNumber);
    }

}
