package calculadoraFiguras;

import java.util.Scanner;

public class figuras {
    /**
     * @param args
     */
    public static void main(String[] args) {

        Scanner ScannerFiguras = new Scanner(System.in);

        System.out.println("""
                Hola programador.
                dime el numero de lados que tiene tu figura y la adivino.

                Nota. solo puedo procesar hasta 10 lados

                Presiona 0 para salir
                    """);

        boolean salir = false;

        while (!salir) {
            int opcion = ScannerFiguras.nextInt();
            if (opcion == 0) {

                salir = true;
                System.out.println("gracias por usar el programa ");
                break;
            } else {
                switch (opcion) {

                    case 1 -> {
                        System.out.println("Probablemente tu figura sea un círculo, porque solo tiene un lado.");

                        break;
                    }
                    case 2 -> {
                        System.out.println("¿Una figura con solo dos lados? Eso es imposible");
                        break;
                    }
                    case 3 -> {
                        System.out.println("Probablemente tu figura sea un Triangulo, porque tiene 3 lados.");
                        break;
                    }
                    case 4 -> {
                        System.out
                                .println(
                                        "Probablemente tu figura sea un cuadrado o un rectángulo, porque tiene 4 lados.");
                        break;
                    }
                    case 5 -> {
                        System.out.println("Probablemente tu figura sea un pentágono, porque tiene 5 lados.");
                        break;
                    }
                    case 6 -> {
                        System.out.println("Probablemente tu figura sea un hexágono, porque tiene 6 lados.");
                        break;
                    }
                    case 7 -> {
                        System.out.println("Probablemente tu figura sea un heptágono, porque tiene 7 lados.");
                        break;
                    }
                    case 8 -> {
                        System.out.println("Probablemente tu figura sea un octágono, porque tiene 8 lados.");
                        break;
                    }
                    case 9 -> {
                        System.out.println("Probablemente tu figura sea un eneágono, porque tiene 9 lados.");
                        break;
                    }
                    case 10 -> {
                        System.out.println("Probablemente tu figura sea un decágono, porque tiene 10 lados.");
                        break;
                    }
                    default -> {
                        System.out.println("No tengo registrada una figura con esa cantidad de lados.");
                    }

                }
                System.out.println("""

                        dime el numero de lados que tiene tu figura y la adivino.

                        Nota. solo puedo procesar hasta 10 lados

                        Presiona 0 para salir
                            """);
            }

        }

        ScannerFiguras.close();
    }

}
