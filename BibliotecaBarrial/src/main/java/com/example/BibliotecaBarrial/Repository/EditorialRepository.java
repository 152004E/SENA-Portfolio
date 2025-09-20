package com.example.BibliotecaBarrial.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Editorial;

@Repository
public interface EditorialRepository extends JpaRepository<Editorial, Long> {
    Editorial findByNombreEditorial(String nombreEditorial);

    // Busca coincidencias parciales ignorando mayúsculas/minúsculas
    List<Editorial> findByNombreEditorialContainingIgnoreCase(String nombreEditorial);
}
