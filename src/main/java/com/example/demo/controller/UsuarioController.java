package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Features;
import com.example.demo.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;
    

    @GetMapping
    public List<?> listar(){
        if(Features.NEW_USUARIO_SERVICE_LISTAR.isActive()){
            return usuarioService.newListar();
        }
        return usuarioService.listar();
    }
    

}
