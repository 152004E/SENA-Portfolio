package parte3.cuentaBancaria;

public class Main {
    public static void main(String[] args) {
        CuentaBancaria cuentaBancaria = new CuentaBancaria(0);

        // SI reciben parametros y NO retornan un valor
        cuentaBancaria.depositarDinero(12345);
        
        // NO reciben parametros y SI retornan un valor
        System.out.println("Saldo actual: " + cuentaBancaria.consultarSaldo());
    }
}
