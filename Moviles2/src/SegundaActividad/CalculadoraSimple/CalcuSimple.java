package SegundaActividad.CalculadoraSimple;

public class CalcuSimple {

    public static void main(String[] args) {
        System.out.println("""

                Hola, programador!
                Este programa es una calculadora Simple.
                """);
        // Scanner scannerSimple = new Scanner(System.in);
        Metodos suma = new Metodos(4, 4);
        suma.sumar();
        Metodos resta = new Metodos(4, 1);
        resta.restar();

        DividirMultiplicar dividir = new DividirMultiplicar();
        dividir.LeerDatos();

        System.out.println("la divicion es " + dividir.division());

        DividirMultiplicar Multiplicar = new DividirMultiplicar();
        Multiplicar.LeerDatosMul();

        System.out.println("la Multiplicacion es " + Multiplicar.multiplicacion());
    }
}