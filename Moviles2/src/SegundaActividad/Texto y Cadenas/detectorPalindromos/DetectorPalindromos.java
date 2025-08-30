package parte2.detectorPalindromos;

public class DetectorPalindromos {
    public boolean palindromo(String texto) {

        texto = texto.replace(" ", "").toLowerCase();

        // Método que SI recibe parámetros y SI retorna un valor
        for (int i = 0; i < texto.length() / 2; i++) {
            if (texto.charAt(i) != texto.charAt(texto.length() - 1 - i)) {
                return false;
            }
        }

        return true;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarPalindromo() {
        String frase = "Yo hago yoga hoy";
        if (palindromo(frase)) {
            System.out.println("\"" + frase + "\" si es un palíndromo.");
        } else {
            System.out.println("\"" + frase + "\" no es un palíndromo.");
        }
    }
}