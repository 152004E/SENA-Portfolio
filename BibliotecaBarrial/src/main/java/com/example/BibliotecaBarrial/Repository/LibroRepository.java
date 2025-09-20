package com.example.BibliotecaBarrial.Repository;

import java.time.Year;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Long> {
    // Busca por cada atributo (Spring genera el SQL solo)
    Libro findByTitulo(String titulo); // SELECT * FROM libros WHERE titulo = ?

    Libro findByIsbn(Integer isbn); // SELECT * FROM libros WHERE isbn = ?

    List<Libro> findByAnio(Year anio); // SELECT * FROM libros WHERE anio = ?

    // También puedes hacer consultas más complejas
    List<Libro> findByTituloContainingIgnoreCase(String titulo);
    // SELECT * FROM libros WHERE LOWER(titulo) LIKE LOWER('%titulo%')
}
