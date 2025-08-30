package parte3.vehiculo;

// Método para arrancar vehículo (sin retorno).
// Método para obtener estado (retorna booleano).

public class Vehiculo {

    // Atributos
    private boolean estado;

    // Constructor
    public Vehiculo() {
        this.estado = false; // El vehículo inicia apagado.
    }
    
    // Metodo que NO reciben parametros y NO retornan un valor
    public void encender() {
        this.estado = true;
        System.out.println("El vehículo está encendido.");
    }

    // Metodo que NO reciben parametros y SI retornan un valor
    public boolean estaEncendido() {
        return this.estado;
    }
}
