package com.example.demo.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


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

    public List<String[]> ConsultaGeneral() {
        
        List<String[]> lista = new ArrayList<>();

        try {
            Connection conn = getConnection();
            PreparedStatement sentencia = conn.prepareStatement("SELECT * FROM usuario");
            ResultSet resultado = sentencia.executeQuery();

            while (resultado.next()) {
                String[] fila = new String[4];
                fila[0] = String.valueOf(resultado.getInt("ID"));
                fila[1] = resultado.getString("NOMBRE");
                fila[2] = resultado.getString("CORREO");
                fila[3] = resultado.getString("TELEFONO");
                lista.add(fila);
            }

        } catch (SQLException e) {
            return new ArrayList<>();
        }
        return lista;
    }
}