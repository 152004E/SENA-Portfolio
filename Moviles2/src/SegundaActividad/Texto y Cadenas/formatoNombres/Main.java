package parte2.formatoNombres;

public class Main {
    public static void main(String[] args) {

        FormatoNombres formato = new FormatoNombres();

        // Llamar al método que SI recibe parámetros y SI retorna un valor
        System.out.println("\"Ana Torres\" en formato apellido, nombre es: " + formato.ingresarNombre("Ana", "Torres"));
        
        // Llamar al método que NO recibe parámetros y NO retorna un valor
        formato.mostrarNombre();
    }
}
