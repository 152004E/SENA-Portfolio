package SegundaActividad.MatemáticasyLógica.VerificadorPrimos;

public class VerificadorPrimos {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido al verificador de numeros primos
                -------------------------------------------------------------
                Este programa verifica numeros primos.
                """);
        Return numeroValidar = new Return();
        numeroValidar.leerNumero();

        System.out.println(numeroValidar.verificaNumero());
         System.out.println("""
                -------------------------------------------------------------
                
                """);
        Aleatorio nuAleatorio = new Aleatorio();
        nuAleatorio.numeroRandomValidar();
        

    }
}
