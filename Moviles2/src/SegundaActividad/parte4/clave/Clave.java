package parte4.clave;

// Método que retorna una contraseña aleatoria de 8 caracteres.
// Otro método imprime una contraseña generada sin retorno.

public class Clave {
    
    // Métodos
    // Método que NO recibe parámetros y SI retorna un valor
    public String generarClave() {

        String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        StringBuilder clave = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            int indice = (int) (Math.random() * caracteres.length());
            clave.append(caracteres.charAt(indice));
        }
        return clave.toString();

    }
    // Método que NO recibe parámetros y NO retorna un valor
    public void imprimirClave() {
        System.out.println("Contraseña generada: " + generarClave());
    }
}
