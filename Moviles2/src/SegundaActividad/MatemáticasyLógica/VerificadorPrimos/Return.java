package MatemáticasyLógica.VerificadorPrimos;

import java.util.Scanner;

public class Return {
    private int numeroPrimo;

    public int getNumeroPrimo() {
        return numeroPrimo;
    }

    public void setNumeroPrimo(int numeroPrimo) {
        this.numeroPrimo = numeroPrimo;
    }

    public String verificaNumero() {
        if (numeroPrimo <= 1) {
            return "El numero  " + numeroPrimo + "  No es un numero primo";
        }
        for (int i = 2; i < numeroPrimo; i++) {
            if ((numeroPrimo % i )== 0) {
                return "El numero  " + numeroPrimo + "  no es un numero primo";
            }
        }
        return "El número " + numeroPrimo + " SÍ es primo";
    }

    public void leerNumero() {
        Scanner numero = new Scanner(System.in);
        System.out.println("-----------------------------------");
        System.out.println("Dame el numero para verificarlo");
        setNumeroPrimo(numero.nextInt());

        numero.close();
    }

}
