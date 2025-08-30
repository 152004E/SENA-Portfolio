package MatemáticasyLógica.NumerosRandom3;

public class Varios {

    public void numeroRandomVarios() {
        // 0 a 9
        for (int i = 1; i <= 4; i++) {
            int random = (int) (Math.random() * 100) + 1;
            System.out.println("Número random " + i + ": " + random);
        }
    }

}
