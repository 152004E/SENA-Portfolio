package parte3.producto;

// Métodos para calcular el precio con IVA (recibe precio y retorna total).
// Otro método imprime el precio con IVA sin retorno.

public class Producto {
    
    // Atributos
    private double precio;
    
    // Constructor
    public Producto(double precio) {
        this.precio = precio;
    }

    // Métodos
    // Método que SI recibe parámetros y SI retorna un valor
    public double calcularTotal (double precio) {
        return precio * 1.19;
    }

    // Método que NO recibe parámetros y NO retorna un valor
    public void precioTotal () {
        System.out.println("Precio sin IVA: " + this.precio);
        System.out.println("Precio con IVA: " + calcularTotal(this.precio));
    }
}
