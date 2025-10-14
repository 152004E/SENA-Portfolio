import java.util.Scanner;

public class main {
    public static void main(String args[]) {
        System.out.println("Bienbenido al programa de calculo");
        System.out.println(
                "Presiona:  \n 1 para hacer el calculo de un parqueadero \n 2 para calcular tipo de triangulo \n 3 para calificacion del estudiante");

        Scanner entrada = new Scanner(System.in);
        int opcion = entrada.nextInt();

        switch (opcion) {
            case 1:
                System.out.println("Ingrese las horas y minutos que utilizo el parqueadero");
                System.out.println("horas");
                int horas = entrada.nextInt();
                System.out.println("minutos");
                int minutos = entrada.nextInt();
                int valorMinutos = minutos*10;
                int valorHora = horas*10;


                break;
            case 2:
                System.out.println("segunda opcion");
                break;
            default:
                break;
        }
    }
}
