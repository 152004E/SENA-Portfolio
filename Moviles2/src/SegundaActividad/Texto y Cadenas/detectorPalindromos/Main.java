package parte2.detectorPalindromos;

public class Main {
    public static void main(String[] args) {
        DetectorPalindromos detector = new DetectorPalindromos();
        
        // Metodo que SI recibe parámetros y SI retorna un valor
        System.out.println("Sometemos = " + detector.palindromo("sometemos"));

        // Llamar al método que NO recibe parámetros y NO retorna un valor
        detector.mostrarPalindromo();        
    }
}
