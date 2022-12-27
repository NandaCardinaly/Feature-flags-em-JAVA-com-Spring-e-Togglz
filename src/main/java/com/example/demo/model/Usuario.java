package com.example.demo.model;

public class Usuario {
    private String nome;
    private Integer idade;
    private String endereço;

    public Usuario(String nome, Integer idade, String endereço) {
        this.nome = nome;
        this.idade = idade;
        this.endereço = endereço;
    }

    public String getNome() {
        return nome;
    }
    public Integer getIdade() {
        return idade;
    }
    public String getEndereço() {
        return endereço;
    }

    
}
