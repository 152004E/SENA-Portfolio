package TerceraActividad.EjemploEmpleado;

import java.util.Arrays;
import java.util.List;

public class MainEmpleados {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido Empleado
                -------------------------------------------------------------
                Este programa muestra el salario de los empleados
                """);

        List<Empleado> lista = Arrays.asList(
                new EmpleadoHere(" Emerson ", 200, 5),
                new EmpleadoHere(" Fabian ", 100, 5),
                new EmpleadoHere(" Reyes ", 300, 5));
        for (Empleado e : lista) {
            System.out.println(e.resumen()); 

        }

    }
}
