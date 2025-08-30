package parte3.persona;

// Métodos para establecer y mostrar datos (nombre, edad).
// Un método retorna la edad; otro imprime los datos.

public class Persona {
    // Atributos
    private String nombre;
    private int edad;

    // Constructor
    public Persona (String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Métodos
    // Método que NO recibe parámetros y SI retorna un valor
    public int edad() {
        return this.edad;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void mostrarDatos() {
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad + "\n");
    }
}
