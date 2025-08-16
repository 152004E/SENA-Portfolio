package SegundaActividad.VerificadorPrimos;

public class Aleatorio {
    public void numeroRandomValidar() {
        // 0 a 9
        for (int i = 1; i <= 10; i++) {
            int random = (int) (Math.random() * 10) + 1;

            if (random <= 1) {
                System.out.println("El numero  " + random + "  No es un numero primo");
            }
            for (int t = 2; t < random; t++) {
                if (random % t == 0) {
                    System.out.println("El numero  " + random + "  No es un numero primo");
                }
            }
            System.out.println(random + "Si es un numero primo");

        }
    }
}
