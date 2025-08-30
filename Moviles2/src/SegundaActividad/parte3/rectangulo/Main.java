package parte3.rectangulo;

public class Main {
    public static void main(String[] args) {
        Rectangulo rectangulo = new Rectangulo(3, 4);

        // SI reciben parametros y SI retornan un valor
        System.out.println("Área del rectángulo: " + rectangulo.areaRectangulo(10,5));

        // NO reciben parametros y NO retornan un valor
        rectangulo.perimetroRectangulo();
    }
}
