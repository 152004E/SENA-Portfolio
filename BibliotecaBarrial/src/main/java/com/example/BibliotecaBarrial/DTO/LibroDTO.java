package com.example.BibliotecaBarrial.DTO;

import lombok.Data;
import java.time.Year;

@Data
public class LibroDTO {
private Long idLibro;
    private String titulo;
    private Integer isbn;
    private Year anio;
    private Long idEditorial; // solo guardamos el ID de la editorial
}
