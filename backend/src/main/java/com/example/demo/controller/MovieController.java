package com.example.demo.controller;

import com.example.demo.entity.Cast;
import com.example.demo.entity.Crew;
import com.example.demo.service.MovieService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class MovieController extends BaseController {

    private static final Logger log = LoggerFactory.getLogger(MovieController.class);
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/getMovie/{id}")
    public String getSpecificMovie(@PathVariable int id) {
        log.info("Get specific movie details api endpoint called.");
        return this.movieService.getSpecificMovie(this.apiURL + "movie/" + id + "?api_key=" + this.apiKey);
    }

    @GetMapping("/getActors/{movieID}")
    public Cast[] getActors(@PathVariable int movieID) {
        log.info("Get actors api endpoint called.");
        return this.movieService.getActorsToMovie(this.apiURL + "movie/" + movieID + "/credits?api_key=" + this.apiKey);
    }

    @GetMapping("/getDirectors/{movieID}")
    public Crew[] getDirectors(@PathVariable int movieID) {
        log.info("Get actors api endpoint called.");
        return this.movieService.getDirectorsToMovie(this.apiURL + "movie/" + movieID + "/credits?api_key=" + this.apiKey);
    }

    @GetMapping("/getMovieByName")
    public String getMovieByName(@RequestParam(value = "name") String name, @RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        log.info("Movie search api endpoint called.");
        return this.movieService.getMovieByName(this.apiURL + "search/movie?api_key=" + this.apiKey + "&query=" + name + "&page=" + pageNumber);
    }
}
