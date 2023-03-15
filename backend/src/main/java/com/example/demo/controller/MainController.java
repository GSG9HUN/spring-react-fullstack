package com.example.demo.controller;

import com.example.demo.service.MainService;
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

    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("/getPopularMovies")
    public String getPopularMovies(@RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        return this.mainService.getResultAsString(this.apiURL + "movie/popular?api_key=" + this.apiKey + "&page=" + pageNumber);
    }

    @GetMapping("/getMovie/{id}")
    public String getSpecificMovie(@PathVariable int id) {
        return this.mainService.getSpecificMovie(this.apiURL + "movie/" + id + "?api_key=" + this.apiKey);
    }

    @GetMapping("/getActors/{movieID}")
    public String getActors(@PathVariable int movieID) {
        return this.mainService.getActorsToMovie(this.apiURL + "movie/" + movieID + "/credits?api_key=" + this.apiKey);
    }

}
