package com.example.BibliotecaBarrial.Repository;

import com.example.BibliotecaBarrial.Entity.LibroAutor;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroAutorRepository extends JpaRepository<LibroAutor, Long> {
  
}