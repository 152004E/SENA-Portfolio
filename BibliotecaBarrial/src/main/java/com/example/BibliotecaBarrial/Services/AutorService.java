package com.example.BibliotecaBarrial.Services;

import java.util.List;


import com.example.BibliotecaBarrial.DTO.AutorDTO;


public interface AutorService {
    AutorDTO crearAutor(AutorDTO autorDTO);

    List<AutorDTO> listarAutores();

    AutorDTO buscarById(Long id);

    AutorDTO actualizarAutor(Long id, AutorDTO autorDTO);

    void eliminarAutor(Long id);
   
}
