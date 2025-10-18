package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {

    @GetMapping("/hola")
    public String decirHola() {       
        return "¡Hola Mundo desde Spring Boot!";
    }

    @GetMapping("/chao")
    public String decirChao() {
        return "¡Chao Hola Mundo desde Spring Boot!";
    }
}
