package parte2.contadorPalabras;

public class ContadorPalabras {
    
    // Método que SI recibe parámetros y SI retorna un valor
    public int contarPalabras(String frase) {
        frase = frase.trim();
        return frase.split("\\s+").length;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarPalabras() {
        System.out.println("La frase 'Otro método imprime el conteo sin retorno.' tiene " + contarPalabras("Otro método imprime el conteo sin retorno.") + " palabras.");
    }

}
