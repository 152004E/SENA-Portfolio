package parte2.contadorVocales;

public class Main {
    public static void main(String[] args) {
        AnalizadorTexto analizador = new AnalizadorTexto();

    // Llamar al método que SI recibe parámetros y SI retorna un valor
    System.out.println("Jhon Alexis Mendoza Rojas: tiene " + analizador.contadorVocales("Jhon Alexis Mendoza Rojas") + " vocales.");

    // Llamar al método que NO recibe parámetros y NO retorna un valor
    analizador.mostrarVocales();
    }
}
