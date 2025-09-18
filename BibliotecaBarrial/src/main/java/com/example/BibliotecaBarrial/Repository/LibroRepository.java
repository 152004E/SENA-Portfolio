package com.example.BibliotecaBarrial.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BibliotecaBarrial.Entity.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro,Long> {

}
