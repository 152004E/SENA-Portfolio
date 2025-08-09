/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package clasesCarro;

/**
 *
 * @author reyes
 */
public class Carro {
    public static void main(String[] args) {
        MetodosCarro carrito = new MetodosCarro();
        carrito.marca = " Toyota";
        carrito.color = " Rojo";
        carrito.anio = 2005;
        
        carrito.frenar();
        carrito.encender();
    }
    
}
