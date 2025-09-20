package com.example.BibliotecaBarrial.Services;

import java.time.LocalDate;
import java.util.List;

import com.example.BibliotecaBarrial.DTO.PrestamoDTO;
import com.example.BibliotecaBarrial.Enum.EstadoPrestamo;

public interface PrestamoService {
    PrestamoDTO crearPrestamo(PrestamoDTO prestamoDTO);

    List<PrestamoDTO> listarPrestamos();

    PrestamoDTO buscarPrestamoPorId(Long id);

    PrestamoDTO actualizarPrestamo(Long id, PrestamoDTO prestamoDTO);

    void eliminarPrestamo(Long id);

    // Métodos extra útiles
    List<PrestamoDTO> listarPrestamosPorFechaSalida(LocalDate fechaSalida);

    List<PrestamoDTO> listarPrestamosPorFechaDevolucion(LocalDate fechaDevolucion);

    List<PrestamoDTO> listarPrestamosPorEstado(EstadoPrestamo estadoPrestamo);
}
