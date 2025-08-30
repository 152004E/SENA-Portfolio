package parte2.contadorPalabras;

public class Main {
    public static void main(String[] args) {
        ContadorPalabras contador = new ContadorPalabras();
        
        // Llamar al método que SI recibe parámetros y SI retorna un valor
        System.out.println("La frase 'Método que recibe una frase y retorna cuántas palabras contiene.' tiene " + contador.contarPalabras("Método que recibe una frase y retorna cuántas palabras contiene.") + " palabras.");

        // Llamar al método que NO recibe parámetros y NO retorna un valor
        contador.mostrarPalabras();
    }
}
