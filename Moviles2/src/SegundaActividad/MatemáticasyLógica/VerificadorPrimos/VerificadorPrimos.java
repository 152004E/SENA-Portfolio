package MatemáticasyLógica.VerificadorPrimos;

public class VerificadorPrimos {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido al Verificador de Números Primos
                -------------------------------------------------------------
                Este programa te permitirá verificar si un número es primo.
                """);

        Return numeroValidar = new Return();
        numeroValidar.leerNumero();

        System.out.println(numeroValidar.verificaNumero());

        System.out.println("""
                -------------------------------------------------------------
                Ahora se generarán algunos números aleatorios para verificar
                cuáles son primos y cuáles no.
                -------------------------------------------------------------
                """);

        Aleatorio nuAleatorio = new Aleatorio();
        nuAleatorio.numeroRandomValidar();
    }
}