package    MatemáticasyLógica.NumerosRandom3;

public class RandomGenerator {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido al Generador de Números Aleatorios
                -------------------------------------------------------------
                Este programa genera un número aleatorio para ti.
                """);

        Retornar numeroRandomRetorno = new Retornar();
        System.out.println("Número generado: " + numeroRandomRetorno.numeroRandom());

        System.out.println("""
                -------------------------------------------------------------
                Este otro programa genera un números aleatorio para ti.
                """);

        Varios variosNuemros = new Varios();
        variosNuemros.numeroRandomVarios();

    }
}