package MatemáticasyLógica.conversionTemperatura;

public class Conversor {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido al Conversor de Temperaturas
                -------------------------------------------------------------
                Este programa convierte entre grados Celsius y Fahrenheit.
                """);

        returnCtoF ctof = new returnCtoF();
        ctof.LeerDatosCelsius();

        System.out.println(ctof.GetCelsius() + " °C equivalen a " + ctof.conversorFahrenheit() + " °F");

        System.out.println("""
                 -------------------------------------------------------------
                Este programa convierte entre grados Fahrenheit a Celsius  .
                """);
        ValoresFtoC FtoC = new ValoresFtoC(77);
        FtoC.ConversorFtoC();
    }
}
