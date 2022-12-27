package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.Features;

@Controller
@RequestMapping("/index")
public class IndexController {
    
    @GetMapping
    public String index(){
        if(Features.NEW_INDEX.isActive()){
            return "portfolio-dark.html";
        }
        return "portfolio.html";
    }
}
