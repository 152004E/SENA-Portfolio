package parte4.adivinanza;

import java.util.Scanner;

// Método que genera un número y el usuario intenta adivinarlo (no retorna).
// Otro método retorna si el usuario acertó.

public class Adivinanza {

    // Atributos
    private int random;
    private int numeroAdivinado;
    
    // Método que NO recibe parámetros y NO retorna un valor
    public void generarNumero () {
        Scanner scanner = new Scanner(System.in);

        random = (int) (Math.random() * (10 - 1 + 1)) + 1;

        System.out.print("Ingresa un número entre 1 y 10 para adivinar: ");
        numeroAdivinado = scanner.nextInt();
    }

    // Método que NO recibe parámetros y SI retorna un valor
    public boolean respuesta () {
        if (numeroAdivinado == random) {
            System.out.println("¡Felicidades! Has adivinado el número.");
            return true;
        } else {
            System.out.println("Lo siento, no has adivinado. El número era: " + random);
            return false;
        }
    }
}
