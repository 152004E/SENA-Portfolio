package TerceraActividad.EjemploEmpleado;

public class EmpleadoHere extends Empleado {
    private final double precioHora;
    private final int horasTrabajadas;

    public EmpleadoHere(String nombre, double precioHora,int horasTrabajadas){
        super(nombre);
        this.precioHora = precioHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    @Override
    public double calcularSalario(){
       return precioHora * horasTrabajadas;
    }

    
}
