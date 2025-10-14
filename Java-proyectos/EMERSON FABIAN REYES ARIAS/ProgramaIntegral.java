import java.util.Scanner;

public class ProgramaIntegral {
    public static void main(String args[]) {
        Scanner entrada = new Scanner(System.in);
        int opcion;

        System.out.println("===========================================");
        System.out.println("   PROGRAMA INTEGRAL - CREADO POR EMERSON REYES");
        System.out.println("===========================================\n");

        do {
            System.out.println("¿Qué deseas realizar hoy?");
            System.out.println("1. Calcular valor a pagar por uso del parqueadero");
            System.out.println("2. Determinar el tipo de triángulo");
            System.out.println("3. Evaluar calificaciones de un curso");
            System.out.println("4. Salir del programa");
            System.out.print("Selecciona una opción: ");
            opcion = entrada.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println("\n--- CÁLCULO DEL VALOR DEL PARQUEADERO ---");
                    System.out.println("Tarifas vigentes:");
                    System.out.println("• Precio por hora: $4.500 COP");
                    System.out.println("• Precio por minuto: $146 COP\n");

                    System.out.print("Ingrese las horas utilizadas: ");
                    int horas = entrada.nextInt();
                    System.out.print("Ingrese los minutos utilizados: ");
                    int minutos = entrada.nextInt();

                    int valorHor = horas * 4500;
                    int valorMin = minutos * 146;
                    int valor = valorHor + valorMin;

                    System.out.println("\nUsted estuvo " + horas + " hora(s) y " + minutos +
                            " minuto(s).");
                    System.out.println("El valor total a pagar es: $" + valor + " COP\n");
                    break;

                case 2:
                    System.out.println("\n--- DETECCIÓN DEL TIPO DE TRIÁNGULO ---");
                    System.out.print("Ingrese la longitud del primer lado: ");
                    int ladoUno = entrada.nextInt();
                    System.out.print("Ingrese la longitud del segundo lado: ");
                    int ladoDos = entrada.nextInt();
                    System.out.print("Ingrese la longitud del tercer lado: ");
                    int ladoTres = entrada.nextInt();

                    if (ladoUno == ladoDos && ladoDos == ladoTres) {
                        System.out.println("El triángulo es EQUILÁTERO (todos los lados son iguales).");
                    } else if (ladoUno == ladoDos || ladoDos == ladoTres || ladoUno == ladoTres) {
                        System.out.println("El triángulo es ISÓSCELES (dos lados son iguales).");
                    } else {
                        System.out.println("El triángulo es ESCALENO (todos los lados son diferentes).");
                    }
                    System.out.println();
                    break;

                case 3:
                    System.out.println("\n--- EVALUACIÓN DE CALIFICACIONES ---");
                    System.out.print("¿Cuántos estudiantes tiene el curso?: ");
                    int estudiantes = entrada.nextInt();
                    int aprobados = 0;
                    int reprobados = 0;

                    System.out.println("Se calificarán " + estudiantes + " estudiantes.\n");

                    for (int i = 1; i <= estudiantes; i++) {
                        System.out.print("Ingrese la calificación del estudiante " + i + " (0-100): ");
                        int calificacion = entrada.nextInt();

                        if (calificacion >= 0 && calificacion <= 100) {
                            if (calificacion < 69) {
                                reprobados++;
                                System.out.println("→ El estudiante " + i + " está REPROBADO.\n");
                            } else {
                                aprobados++;
                                System.out.println("→ El estudiante " + i + " está APROBADO.\n");
                            }
                        } else {
                            System.out.println("✖ Calificación inválida. Intente nuevamente.\n");
                            i--;
                        }
                    }

                    System.out.println("====== RESUMEN DEL CURSO ======");
                    System.out.println("Total de estudiantes: " + estudiantes);
                    System.out.println("Aprobados: " + aprobados);
                    System.out.println("Reprobados: " + reprobados);
                    System.out.println("===============================\n");
                    break;

                case 4:
                    System.out.println("\nGracias por usar el programa de Emerson Reyes.");
                    System.out.println("¡Hasta pronto!\n");
                    break;

                default:
                    System.out.println("\nOpción inválida. Por favor, intenta de nuevo.\n");
            }

        } while (opcion != 4);

        entrada.close();
    }
}
