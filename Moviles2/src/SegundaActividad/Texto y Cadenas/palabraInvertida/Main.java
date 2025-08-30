package parte2.palabraInvertida;

public class Main {
    public static void main(String[] args) {
        PalabraInvertida palabra = new PalabraInvertida();

        // Método que SI recibe parámetros y SI retorna un valor
        System.out.println("Ficha SENA 2996887 al reves es: " + palabra.invertirPalabra("Ficha SENA 2996887"));

        // Método que NO recibe parámetros y NO retorna un valor
        palabra.mostrarPalabraInvertida();
    }
}
