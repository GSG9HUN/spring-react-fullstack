package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;

public class BaseController {
    @Value("${api.key}")
    protected String apiKey;
    @Value("${api.url}")
    protected String apiURL;
}
