package parte4.clave;

public class Main {
    public static void main(String[] args) {
        Clave clave = new Clave();
        
        // Generar y mostrar una contraseña aleatoria
        System.out.println("Contraseña generada: " + clave.generarClave());
        
        // Imprimir una contraseña generada sin retorno
        clave.imprimirClave();
    }
}
