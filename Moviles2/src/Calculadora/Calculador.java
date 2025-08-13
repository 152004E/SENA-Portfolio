/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Calculadora;

import java.util.Scanner;

/**
 *
 * @author adminsena
 */
public class Calculador {

    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("""
                           Hola, programador!
                           Este programa es una calculadora.
                           
                           Que quieres calcular?
                           
                           Las opciones de la calculadora son:
                           1: Suma
                           2: Resta
                           3: Producto
                           4: Division
                           5: Potencia
                           """);
        boolean salir = false;
        while (!salir) {
            System.out.println("""
                           
                           
                           Que quieres calcular?
                           
                           Las opciones de la calculadora son:
                           1: Suma
                           2: Resta
                           3: Producto
                           4: Division
                           5: Potencia
                           """);

            int opcion = myScanner.nextInt();
            System.out.println("Primer numero : \n");
            int numero1 = myScanner.nextInt();
            System.out.println("Segundo numero : \n");
            int numero2 = myScanner.nextInt();

            switch (opcion) {
                case 1 -> {
                    int suma = numero1 + numero2;
                    System.out.println("La suma de " + numero1 + " + " + numero2 + " es: " + suma);
                    break;
                }
                case 2 -> {
                    int resta = numero1 - numero2;
                    System.out.println("La resta de " + numero1 + " - " + numero2 + " es: " + resta);
                    break;
                }
                case 3 -> {
                    int multiplicacion = numero1 * numero2;
                    System.out.println("La multiplicación de " + numero1 + " * " + numero2 + " es: " + multiplicacion);
                    break;
                }
                case 4 -> {
                    if (numero2 != 0) {
                        double division = (double) numero1 / numero2;
                        System.out.println("La división de " + numero1 + " / " + numero2 + " es: " + division);
                    } else {
                        System.out.println("Error: No se puede dividir entre cero.");
                    }
                    break;
                }
                case 5 -> {
                    int potencia = numero1 % numero2;
                    System.out.println("El módulo de " + numero1 + " % " + numero2 + " es: " + potencia);
                    break;
                }
                default -> {
                    System.out.println("Opción no válida.");
                }
            }
        }
        // secuencia de sentencias.
        // secuencia de sentencias.
        // Default secuencia de sentencias.
        myScanner.close();

    }
}
