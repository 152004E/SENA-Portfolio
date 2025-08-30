package parte4.moneda;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        Moneda moneda = new Moneda();

        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese los pesos que desea convertir: " );
        double pesosCol = scanner.nextDouble();

        // SI reciben parametros y SI retornan un valor
        System.out.println("Recibirá " + moneda.conversor(pesosCol) + " dolares por sus " + pesosCol + " pesos.\n");
        
        // NO reciben parametros y NO retornan un valor
        moneda.conversorFijo();
    }
}
