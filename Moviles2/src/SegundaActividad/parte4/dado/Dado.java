package parte4.dado;

// Método que retorna un número aleatorio del 1 al 6.
// Otro método imprime una tirada sin retorno.

public class Dado {
    // Método que NO recibe parámetros y SI retorna un valor
    public int tirarDado () {
        return (int) (Math.random() * (6 - 1 + 1)) + 1;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void imprimirTirada () {
        System.out.println("Tirada del dado: " + tirarDado());
    }
}
