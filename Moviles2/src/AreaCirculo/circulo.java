/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package AreaCirculo;

import java.util.Scanner;

/**
 *
 * @author adminsena
 */
public class circulo {

    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);

        System.out.println("Calcular el area de un cirlulo");
        System.out.println("Dame el radio de tu circulo para saber el area");
        double radio = myScanner.nextDouble();

        double area;
        if (radio >= 7 && radio <= 52) {
            area = Math.PI * (radio * radio);
            System.out.println("El area del circulo es : " + area);
        }
        myScanner.close();

    }
}
