package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Usuario;
import com.example.demo.model.UsuarioDTO;

@Service
public class UsuarioService {
    
    public List<Usuario> listar(){
        return Arrays.asList(new Usuario("Old Nome", 21, "Rua de pedras"));
    }

    public List<UsuarioDTO> newListar(){
        return Arrays.asList(new UsuarioDTO("New Nome", 30));
    }
}
