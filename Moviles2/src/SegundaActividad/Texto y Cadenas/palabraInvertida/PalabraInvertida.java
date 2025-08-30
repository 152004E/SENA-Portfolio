package parte2.palabraInvertida;

public class PalabraInvertida {
    // Método que SI recibe parámetros y SI retorna un valor
    public String invertirPalabra (String palabra) {
        String respuesta = "";

        for (int i = palabra.length() - 1; i >= 0; i--) {
            respuesta += palabra.charAt(i);
        }

        return respuesta;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarPalabraInvertida() {
        System.out.println("Jhon Alexis Mendoza Rojas al reves es: " + invertirPalabra("Jhon Alexis Mendoza Rojas"));
    }
}
