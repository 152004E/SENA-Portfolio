package TerceraActividad.EjemploEmpleado;

abstract class Empleado {
    private final String nombreEmpleado;

    Empleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public String getEmpleado() {
        return nombreEmpleado;
    }

    abstract double calcularSalario();

    public String resumen() {
        return "Empleado" + nombreEmpleado + "  con un salario de :" + calcularSalario();
    }
}
