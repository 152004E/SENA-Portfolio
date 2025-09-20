package com.example.BibliotecaBarrial.Repository;

import com.example.BibliotecaBarrial.Entity.Usuario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Busca por nombre exacto
    Usuario findByNombreUsuario(String nombreUsuario); // SELECT * FROM usuarios WHERE nombreUsuario = ?

    // Busca por coincidencias parciales en el nombre
    List<Usuario> findByNombreUsuarioContainingIgnoreCase(String nombreUsuario);
}