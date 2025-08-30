package parte4.tareas;

public class Main {
    public static void main(String[] args) {
        
        Tareas tareas = new Tareas(7);
        
        // Llamar los métodos
        // SI recibe parámetros y NO retorna un valor
        tareas.registrarTarea(3);
        
        // NO recibe parámetros y SI retorna un valor
        System.out.println("\nCantidad de tareas registradas: " + tareas.tareasRegistradas());
    }
    
}
