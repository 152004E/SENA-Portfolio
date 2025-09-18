package com.example.BibliotecaBarrial.Entity;

import java.time.LocalDate;

import com.example.BibliotecaBarrial.Enum.EstadoPrestamo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "prestamos")
public class Prestamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPrestamo", nullable = false, unique = true, updatable = false)
    private long idPrestamo;

    @Column(name = "fechaSalida", nullable = false)
    private LocalDate  fechaSalida;

    @Column(name = "fechaDevolucion", nullable = false)
    private LocalDate  fechaDevolucion;

    @Column(name = "estadoPrestamo", nullable = false)
    @Enumerated(EnumType.STRING) // 👈 Muy importante: guarda el texto, no el índice
    private EstadoPrestamo estadoPrestamo = EstadoPrestamo.ACTIVO;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idLibro", nullable = false) // FK hacia la tabla libro
    private Libro libro;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idUsuario", nullable = false) // FK hacia la tabla libro
    private Usuario usuario;

}
