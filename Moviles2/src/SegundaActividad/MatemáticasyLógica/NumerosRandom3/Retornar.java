package SegundaActividad.MatemáticasyLógica.NumerosRandom3;

public class Retornar {
    private int randomRetorno;

    public int getRandomRetorno() {
        return randomRetorno;
    }

    public void setRandomRetorno(int randomRetorno) {
        this.randomRetorno = randomRetorno;
    }

    public int numeroRandom() {
        randomRetorno = (int) (Math.random() * 100)+ 1; // 0 a 9
        return randomRetorno;
    }
}
