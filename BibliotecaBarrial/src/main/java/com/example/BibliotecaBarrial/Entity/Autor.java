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
@Table(name = "autores")
public class Autor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAutor", nullable = false, unique = true, updatable = false)
    private long idAutor;

    @Column(name = "nombreAutor", nullable = false, length = 100)
    private String nombreAutor;
    @Column(name = "apellidoAutor", nullable = false, length = 100)
    private String apellidoAutor;

     @OneToMany(mappedBy = "autor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
     private Set<LibroAutor> coleccionLibrosAutor;
}
