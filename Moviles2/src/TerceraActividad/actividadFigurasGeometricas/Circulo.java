package TerceraActividad.actividadFigurasGeometricas;

public class Circulo extends Figura {
    private final double radio;
    private double area;
    private double perimetro;

    public Circulo(String nombreFigura, double radio) {
        super(nombreFigura);
        this.radio = radio;

    }

    @Override
    public double calcularArea() {
        area = (Math.PI * (radio*radio));
        return area;
    }

    @Override
    public double calcularPerimetro() {
        perimetro = Math.PI * radio*2;
        return perimetro;
    }
}
