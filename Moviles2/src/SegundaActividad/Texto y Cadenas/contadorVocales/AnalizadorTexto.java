package parte2.contadorVocales;

public class AnalizadorTexto {
    // Métodos
    // Método que SI recibe parámetros y SI retorna un valor
    public int contadorVocales (String texto) {
        int vocales = 0;
        texto = texto.toLowerCase();

        for (int i = 0; i < texto.length(); i++) {
            char letra = texto.charAt(i);
            if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
                vocales++;
            }
        }

        return vocales;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarVocales() {
        System.out.println("Analisis y desarrollo de software: tiene " + contadorVocales("Analisis y desarrollo de software") + " vocales.");
    }
}
