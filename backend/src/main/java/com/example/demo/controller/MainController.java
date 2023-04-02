package com.example.demo.controller;

import com.example.demo.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class MainController extends BaseController {

    private final MainService mainService;
    private static final Logger log = LoggerFactory.getLogger(MainController.class);

    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("/getPopularMovies")
    public String getPopularMovies(@RequestParam(value = "pageNumber", defaultValue = "1") String pageNumber) {
        log.info("Get Popular movies api endpoint called.");
        return this.mainService.getPopularMovies(this.apiURL + "movie/popular?api_key=" + this.apiKey + "&page=" + pageNumber);
    }
}
