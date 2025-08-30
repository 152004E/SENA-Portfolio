package tallerIntegracion1;

abstract class Persona {
    private final String nombre;
    private final String apellido;

    Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

    }
    public void mostrarCarrera(){}
    public void mostrarInformacion() {

        System.out.println("Hola " + nombre + " " + apellido + " como estas?");
    }

}
