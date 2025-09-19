package com.example.BibliotecaBarrial.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Editorial;

@Repository
public interface EditorialRepository extends JpaRepository<Editorial, Long> {
Editorial findByNombreEditorial(String nombreEditorial);
}
