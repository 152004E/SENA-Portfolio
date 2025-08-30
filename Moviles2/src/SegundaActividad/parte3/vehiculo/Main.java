package parte3.vehiculo;

public class Main {
    public static void main(String[] args) {
        
        Vehiculo vehiculo = new Vehiculo();
        
        // Llamar los métodos
        // NO reciben parametros y NO retornan un valor
        vehiculo.encender();
        
        // NO reciben parametros y SI retornan un valor
        System.out.println("¿El vehículo ya arrancó? " + vehiculo.estaEncendido());
    }
}
