package SegundaActividad.conversionTemperatura;

public class ValoresFtoC {
    private float Fahrenheit;
    private float Resultado;


    public ValoresFtoC(float Fahrenheit){
        this.Fahrenheit = Fahrenheit;
    }
    public float GetFahrenheit(){
        return Fahrenheit;
    }
    public void SetFahrenheit(float Fahrenheit){
        this.Fahrenheit = Fahrenheit;
    }
    public void ConversorFtoC(){
        Resultado = (Fahrenheit - 32) * 0.55555555f;
        System.out.println("La conversión de Fahrenheit a Celsius es: " + Resultado + " °C");
    }

}
