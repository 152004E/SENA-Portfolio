package parte4.dado;

public class Main {
    public static void main(String[] args) {
        // Crear la instancia
        Dado dado = new Dado();

        // NO recibe parámetros y SI retorna un valor
        dado.tirarDado();

        // NO recibe parámetros y NO retorna un valor
        dado.imprimirTirada();
    }
}
