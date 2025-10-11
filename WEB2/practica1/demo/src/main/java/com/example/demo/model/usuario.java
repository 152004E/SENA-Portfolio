package com.example.demo.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class usuario extends conexion{
        public String Registrar(String nom, String cor, String tel){
            try 
            {
                Connection conn = getConnection();
                PreparedStatement sentencia = conn.prepareStatement("INSERT INTO usuario (nombre, correo, telefono) VALUES (?, ?, ?)");
                sentencia.setString(1, nom);
                sentencia.setString(2, cor);
                sentencia.setString(3, tel);
                sentencia.executeUpdate();
                return "1";
            } 
            catch (SQLException e) 
            {
                return e.getMessage();
            }
        }
}