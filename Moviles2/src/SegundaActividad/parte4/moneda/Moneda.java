package parte4.moneda;

// Método que recibe una cantidad en pesos y retorna el valor en dólares.
// Otro método imprime conversión de un valor fijo.

public class Moneda {
    // Métodos
    // Metodo que SI reciben parametros y SI retornan un valor
    public double conversor (double pesos) {

        double dolar = 4300;
        return pesos / dolar;
    }

    // Metodo que NO reciben parametros y NO retornan un valor
    public void conversorFijo () {
        System.out.println("10.000 pesos colombianos son " + conversor(10000) + " dolares.");
    }
}
