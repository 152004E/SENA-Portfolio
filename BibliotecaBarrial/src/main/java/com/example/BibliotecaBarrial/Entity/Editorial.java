package com.example.BibliotecaBarrial.Entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "editoriales")
public class Editorial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idEditorial", nullable = false, unique = true, updatable = false)
    private long idEditorial;

    @Column(name = "nombreEditorial", nullable = false, length = 100)
    private String nombreEditorial = "sin Nombre";

    @OneToMany(mappedBy = "editorial", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Libro> libros;
}
