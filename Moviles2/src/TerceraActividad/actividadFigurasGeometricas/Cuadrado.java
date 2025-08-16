package TerceraActividad.actividadFigurasGeometricas;

public class Cuadrado extends Figura {
    private final double lado;
    private double area;
    private double perimetro;

    public Cuadrado(String nombreFigura, double lado) {
        super(nombreFigura);
        this.lado = lado;

    }

    @Override
    public double calcularArea() {
        area = lado * lado;
        return area;
    }

    @Override
    public double calcularPerimetro() {
        perimetro = lado * 4;
        return perimetro;
    }
}
