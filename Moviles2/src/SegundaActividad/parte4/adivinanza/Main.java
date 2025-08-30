package parte4.adivinanza;

public class Main {
    public static void main(String[] args) {
        // Crear la instancia
        Adivinanza adivinanza = new Adivinanza();

        // NO recibe parámetros y NO retorna un valor
        adivinanza.generarNumero();

        // Método que NO recibe parámetros y SI retorna un valor
        adivinanza.respuesta();
    }
}
