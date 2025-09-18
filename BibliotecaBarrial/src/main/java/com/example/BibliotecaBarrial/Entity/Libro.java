package com.example.BibliotecaBarrial.Entity;

import java.time.Year;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "libros")
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idLibro", nullable = false, unique = true, updatable = false)
    private long idLibro;

    @Column(name = "titulo", nullable = false, length = 50)
    private String titulo;

    @Column(name = "isbn", nullable = false, length = 20)
    private Integer isbn;

    @Column(name = "anio", nullable = false)
    private Year anio;

    @OneToMany(mappedBy = "libro", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<LibroAutor> coleccionDeLibrosAutor;

    @OneToMany(mappedBy = "libro", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Prestamo> coleccionDePrestamos;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idEditorial", nullable = false) // FK hacia la tabla editorial
    private Editorial editorial;
}
