package parte3.rectangulo;

// Método que recibe base y altura y retorna el área.
// Otro método imprime el perímetro sin retorno.

public class Rectangulo {
    // Atributos
    private double base;
    private double altura;

    // Constructor
    public Rectangulo (double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    // Métodos
    // Metodo que SI reciben parametros y SI retornan un valor
    public double areaRectangulo (double base, double altura) {
        return base * altura;
    }

    // Metodo que NO reciben parametros y NO retornan un valor
    public void perimetroRectangulo () {
        System.out.println("El perímetro del rectángulo es: " + (this.base + this.altura) * 2);
    }
}