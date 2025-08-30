package parte4.tareas;

// Método que recibe una tarea y la guarda (sin retorno).
// Método que retorna la cantidad de tareas registradas.

public class Tareas {
    // Atributos
    private int cantidadTareas;

    // Constructor
    public Tareas(int cantidadTareas) {
        this.cantidadTareas = cantidadTareas;
    }

    // Métodos
    // Método que SI recibe parámetros y NO retorna un valor
    public void registrarTarea(int nuevaTarea) {
        this.cantidadTareas += nuevaTarea;
        System.out.println("Usted ha registrado " + nuevaTarea + " tarea(s) nueva(s).");
    }

    // Método que NO recibe parámetros y SI retorna un valor
    public int tareasRegistradas () {
        return this.cantidadTareas;
    }
}
