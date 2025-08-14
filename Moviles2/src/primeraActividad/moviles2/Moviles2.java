/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package primeraActividad.moviles2;

import java.util.Scanner;

/**
 *
 * @author adminsena
 */
public class Moviles2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        

        System.out.println(" Escribe 3 numeros mayores a 0");
        String num1 = myScanner.nextLine();
        String num2 = myScanner.nextLine();
        String num3 = myScanner.nextLine();
        int numero1;
        numero1 = Integer.parseInt(num1);
        int numero2;
        numero2 = Integer.parseInt(num2);
        int numero3;
        numero3 = Integer.parseInt(num3);

        // String numeroMayor = myScanner.nextLine();
        // String numeroMenor = myScanner.nextLine();
        //int numeroM = Integer.parseInt(numeroMayor);
        //int numeroMn = Integer.parseInt(numeroMenor);
        //numero mayor
        if (numero1 >= 0 && numero2 >= 0 && numero3 >= 0) {
            if (numero1 > numero2 && numero1 > numero3) {
                System.out.println(numero1 + " es el numero mayor");
            } else if (numero2 > numero1 && numero2 > numero3) {
                System.out.println(numero2 + " es el numero mayor");
            } else if (numero3 > numero2 && numero3 > numero1) {
                System.out.println(numero3 + " es el numero mayor");
            }
            // numero del medio
            //Primera validacion
            if ((numero1 > numero2) && (numero1 < numero3)) {
                System.out.println(numero1 + " es el numero del medio");
            } else if ((numero1 < numero2) && (numero1 > numero3)) {
                System.out.println(numero1 + " es el numero del medio");
            } //segunda validacion
            else if ((numero2 > numero1) && (numero2 < numero3)) {
                System.out.println(numero2 + " es el numero del medio");
            } else if ((numero2 < numero1) && (numero2 < numero3)) {
                System.out.println(numero2 + " es el numero del medio");
            } //tercera validacion
            else if ((numero3 > numero2) && (numero3 < numero1)) {
                System.out.println(numero3 + " es el numero del medio");
            } else if ((numero3 < numero2) && (numero3 > numero1)) {
                System.out.println(numero3 + " es el numero del medio");
            }
            //numero negativo
            if (numero1 < numero2 && numero1 < numero3) {
                System.out.println(numero1 + " es el numero menor");
            } else if (numero2 < numero1 && numero2 < numero3) {
                System.out.println(numero2 + " es el numero menor");
            } else if (numero3 < numero2 && numero3 < numero1) {
                System.out.println(numero3 + " es el numero menor");
            }
        } //validacion nula
        else {
            System.out.println("Valor no valido");
        }
        myScanner.close();

        System.out.println("Gracias por usar el programa");
    }

}
