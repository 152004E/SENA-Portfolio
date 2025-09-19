package com.example.BibliotecaBarrial.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {
    Autor findByNombreAutor(String nombreAutor);

    Autor findByApellidoAutor(String apellidoAutor);
}
