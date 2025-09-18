package com.example.BibliotecaBarrial.DTO;

import java.time.LocalDate;
import lombok.Data;
import com.example.BibliotecaBarrial.Enum.EstadoPrestamo;
@Data
public class PrestamoDTO {
private Long idPrestamo;
    private LocalDate fechaSalida;
    private LocalDate fechaDevolucion;
    private EstadoPrestamo estadoPrestamo;
    private Long idLibro;
    private Long idUsuario;
}
