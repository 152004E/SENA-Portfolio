package com.example.BibliotecaBarrial.Services;

import java.util.List;

import com.example.BibliotecaBarrial.DTO.LibroDTO;

public interface LibroService {
  LibroDTO crearLibro(LibroDTO libroDTO);

    List<LibroDTO> listarLibros();

    LibroDTO buscarLibroPorId(Long id);

    LibroDTO actualizarLibro(Long id, LibroDTO libroDTO);

    void eliminarLibro(Long id);
}
