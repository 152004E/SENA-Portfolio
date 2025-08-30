package tallerIntegracion1;

public class Estudiante extends Persona {

    private final String carrera;

    public Estudiante(String nombre, String apellido, String carrera) {
        super(nombre, apellido);
        this.carrera = carrera;
    }

    public String getCarrera() {
        return carrera;
    }

}
