package com.example.BibliotecaBarrial.Services;

import java.util.List;

import com.example.BibliotecaBarrial.DTO.EditorialDTO;

public interface EditorialService {
    EditorialDTO crearEditorial(EditorialDTO editorialDTO);

    List<EditorialDTO> listarEditoriales();

    EditorialDTO buscarById(Long id);

    EditorialDTO actualizarEditorial(Long id,EditorialDTO editorialDTO);

    void eliminarEditorial(Long id);
}
 // AutorDTO crearAurot(AutorDTO autorDTO);

    // List<AutorDTO> listarAutores();

    // AutorDTO buscarById(Long id);

    // AutorDTO actualizarAutor(Long id, AutorDTO autorDTO);

    // void eliminarAuror(Long id);