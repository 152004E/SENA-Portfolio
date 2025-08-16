package SegundaActividad.MatemáticasyLógica.Factorail;

import java.util.Scanner;

public class ReturnFac {
    private int numFac;
    private int resultado = 1;

    public int getNumFac() {
        return numFac;
    }

    public void setNumFac(int numFac) {
        this.numFac = numFac;
    }
    public int factorial () {
        // if (numFac ==0) {
        //     return resultado;
        // }
        // for(){

        // }

       return resultado;
    }
    public void leerNumeroFactoria(){
        Scanner lNFactorial = new Scanner(System.in);
        System.out.println("Dame el numero para poder hacer le factorial");
        setNumFac(lNFactorial.nextInt());
        lNFactorial.close();
    }
}
