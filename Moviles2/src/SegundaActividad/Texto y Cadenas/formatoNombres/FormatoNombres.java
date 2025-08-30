package parte2.formatoNombres;

import java.util.Scanner;

public class FormatoNombres {

    // Método que SI recibe parámetros y SI retorna un valor
    public String ingresarNombre (String nombre, String apellido) {
        return apellido + ", " + nombre;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarNombre() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Ingrese el apellido: ");
        String apellido = scanner.nextLine();

        System.out.println("Formato apellido, nombre: " + ingresarNombre(nombre, apellido));
    }
}
