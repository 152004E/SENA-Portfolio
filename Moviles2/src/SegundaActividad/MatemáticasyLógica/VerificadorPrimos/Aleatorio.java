package SegundaActividad.MatemáticasyLógica.VerificadorPrimos;

public class Aleatorio {
    public void numeroRandomValidar() {
        // 0 a 9
        for (int i = 1; i <= 20; i++) {
            int random = (int) (Math.random() * 50) + 1;
            boolean esPrimo = true;

            if (random <= 1) {
                esPrimo = false;
            } else {

                for (int t = 2; t < random; t++) {
                    if (random % t == 0) {
                        esPrimo = false;
                        break;
                    }
                }
            }

            if (esPrimo) {
                System.out.println(random + "  Si es un numero primo");
            }else{
                System.out.println(random + "  No es un numero primo");
            }

        }
    }
}
