package SegundaActividad.MatemáticasyLógica.conversionTemperatura;

import java.util.Scanner;

public class returnCtoF {

    private float celsius;

    public float GetCelsius() {
        return celsius;
    }

    public void SetCelsius(float celsius) {
        this.celsius = celsius;
    }

    public float conversorFahrenheit() {
        float resultado = (celsius * 1.8f) + 32;
        return resultado;
    }

    public void LeerDatosCelsius() {
        Scanner LeerCelsius = new Scanner(System.in);
        System.out.println("-----------------------------------");
        System.out.print("Ingrese la temperatura en grados Celsius: ");
        SetCelsius(LeerCelsius.nextFloat());

        LeerCelsius.close();
    }
}