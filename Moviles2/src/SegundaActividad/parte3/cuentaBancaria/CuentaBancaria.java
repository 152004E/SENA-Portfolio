package parte3.cuentaBancaria;

// Método para depositar dinero (recibe monto y no retorna).
// Método para consultar saldo (retorna saldo).

public class CuentaBancaria {
    
    // Atributos
    private double saldo;

    // Constructor
    public CuentaBancaria (double saldo) {
        this.saldo = saldo;
    }

    // Métodos
    // Metodo que SI reciben parametros y NO retornan un valor
    public void depositarDinero (double monto) {
        this.saldo += monto;
        System.out.println("Ha depositado en su cuenta $" + monto);
    }

    // Metodo que NO reciben parametros y SI retornan un valor
    public double consultarSaldo () {
        return this.saldo;
    }
}
