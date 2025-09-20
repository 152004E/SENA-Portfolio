package com.example.BibliotecaBarrial.Services;

import java.util.List;

import com.example.BibliotecaBarrial.DTO.UsuarioDTO;

public interface UsuarioService {
  UsuarioDTO crearUsuario(UsuarioDTO usuarioDTO);

    List<UsuarioDTO> listarUsuarios();

    UsuarioDTO buscarUsuarioPorId(Long id);

    UsuarioDTO actualizarUsuario(Long id, UsuarioDTO usuarioDTO);

    void eliminarUsuario(Long id);

    // Métodos extra útiles
  

    List<UsuarioDTO> buscarUsuariosPorNombre(String nombre);
}
