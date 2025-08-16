package TerceraActividad.actividadFigurasGeometricas;

abstract class Figura {
    // Crea una clase abstracta Figura con:

    // Un método abstracto double area().

    // Un método abstracto double perimetro().

    // Un método concreto void mostrarInfo() que imprima "Figura con área: ... y
    // perímetro:
    private final String nombreFigura;

    public String getNombreFigura() {
        return nombreFigura;
    }

    Figura(String nombreFigura) {
        this.nombreFigura = nombreFigura;

    }

    abstract double calcularArea();

    abstract double calcularPerimetro();

    public String mostrarInfoFiguras() {
        return "La figura " + nombreFigura + " tiene un area de  : " + calcularArea()
                + " un perimetro de : " + calcularPerimetro();
    }

}
