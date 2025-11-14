package com.example.demo.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexion {
    private static String URL = "jdbc:mysql://localhost:33065/tienda";
        private static String USER = "root";
        private static String PASSWORD = "";
       


        public static Connection getConnection() {
            Connection conexion = null;
            try 
            {
                conexion = DriverManager.getConnection(URL, USER, PASSWORD);
            } 
            catch (SQLException e) {
                e.getMessage();
            }
            return conexion;
        }
}
