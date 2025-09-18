package com.example.BibliotecaBarrial.Repository;

import com.example.BibliotecaBarrial.Entity.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
}
