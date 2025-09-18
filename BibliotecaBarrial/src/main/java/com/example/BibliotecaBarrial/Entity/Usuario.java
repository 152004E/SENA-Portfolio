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
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario", nullable = false, unique = true, updatable = false)
    private long idUsuario;

    @Column(name = "nombreUsuario", nullable = false, length = 100)
    private String nombreUsuario;
    @Column(name = "apellidoUsuario", nullable = false, length = 100)
    private String apellidoUsuario;

     @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Prestamo> coleccionDePrestamos;
}
