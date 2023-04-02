package com.example.demo.service;

import com.example.demo.entity.Cast;
import com.example.demo.entity.CastResponse;
import com.example.demo.entity.Crew;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class MovieService {
    private static final Logger log = LoggerFactory.getLogger(MovieService.class);

    public String getSpecificMovie(String url) {
        return (new RestTemplate()).getForObject(url, String.class);
    }

    public Cast[] getActorsToMovie(String url) {
        CastResponse castResponse = (new RestTemplate()).getForObject(url, CastResponse.class);

        assert castResponse != null;
        return Arrays.stream(castResponse.getCast()).filter(cast -> "Acting".equals(cast.getKnown_for_department())).toArray(Cast[]::new);
    }

    public Crew[] getDirectorsToMovie(String url) {
        CastResponse castResponse = (new RestTemplate()).getForObject(url, CastResponse.class);

        assert castResponse != null;
        return Arrays.stream(castResponse.getCrew()).filter(crew -> "Director".equals(crew.getJob())).toArray(Crew[]::new);
    }

    public String getMovieByName(String url) {
        return (new RestTemplate()).getForObject(url, String.class);
    }
}
