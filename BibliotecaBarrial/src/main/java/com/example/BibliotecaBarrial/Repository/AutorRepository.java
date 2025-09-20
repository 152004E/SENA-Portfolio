package com.example.BibliotecaBarrial.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {
    Autor findByNombreAutor(String nombreAutor);

    Autor findByApellidoAutor(String apellidoAutor);


    // Busca por coincidencia parcial en nombre o apellido
    List<Autor> findByNombreAutorContainingIgnoreCase(String nombreAutor); 
    List<Autor> findByApellidoAutorContainingIgnoreCase(String apellidoAutor);
}
