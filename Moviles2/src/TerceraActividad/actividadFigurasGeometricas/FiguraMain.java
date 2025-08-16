package TerceraActividad.actividadFigurasGeometricas;

import java.util.Arrays;
import java.util.List;

public class FiguraMain {
    public static void main(String[] args) {
        System.out.println("""

                 Bienvenido
                -------------------------------------------------------------
                Este programa calcula el area y el perimetro de dos figuras
                """);

        List<Figura> lista = Arrays.asList(
                new Cuadrado("cuadrado1", 4),
                new Cuadrado("cuadrado2", 10),
                new Circulo("circulo 1", 10),
                new Circulo("circulo 2", 10),
                new Circulo("circulo 3", 10));
        for (Figura e : lista) {
            System.out.println(e.mostrarInfoFiguras());
        }

    }
}
