package com.example.BibliotecaBarrial.Repository;

import com.example.BibliotecaBarrial.Entity.Prestamo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
      // Busca préstamos por fecha de inicio
    List<Prestamo> findByFechaPrestamo(LocalDate fechaPrestamo);

    // Busca préstamos por fecha de devolución
    List<Prestamo> findByFechaDevolucion(LocalDate fechaDevolucion);

    // Busca préstamos por estado (ejemplo: "activo", "devuelto")
    List<Prestamo> findByEstado(String estado);
}
