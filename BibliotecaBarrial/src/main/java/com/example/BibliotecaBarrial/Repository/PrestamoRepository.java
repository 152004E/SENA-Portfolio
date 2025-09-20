package com.example.BibliotecaBarrial.Repository;

import com.example.BibliotecaBarrial.Entity.Prestamo;
import com.example.BibliotecaBarrial.Enum.EstadoPrestamo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
     // Busca préstamos por fecha de salida (usa el nombre correcto de la entidad)
    List<Prestamo> findByFechaSalida(LocalDate fechaSalida);

    // Busca préstamos por fecha de devolución
    List<Prestamo> findByFechaDevolucion(LocalDate fechaDevolucion);

    // Busca préstamos por estado
    List<Prestamo> findByEstadoPrestamo(EstadoPrestamo estadoPrestamo);
}
