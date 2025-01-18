package com.dominhdang.novelhub_be.features.home;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping("/")
    public ResponseEntity<String> firstResponse() {
        return new ResponseEntity<String>("Hello World", HttpStatus.OK);
    }
}
