package SegundaActividad.CalculadoraSimple;

public class Metodos {
    private int numero1;
    private int numero2;
    private float resultado;

    // contructor para
    public Metodos(int numero1, int numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    // Para acceder a los atributos es necesario usar el get y el set para
    // modificarlos.

    // Primero con un get lo que se hace es devolver lo que se tiene en la clase y
    // mirar su contenido
    public int getNumero1() {
        return numero1;
    }

    // Segundo, para modificar a gusto se usa el set para aplicarle parametros a el
    // objeto
    public void setNumero1(int numero1) {
        this.numero1 = numero1;
    }

    // Obtener segundo numero

    public int getNumero2() {
        return numero2;
    }

    public void setNumero2(int numero2) {
        this.numero2 = numero2;
    }

    // metodos para hacer las operaciones aritmeticas
    public void sumar() {
        resultado = numero1 + numero2;
        System.out.println("La suma es : " + resultado + " ");
    }

    public void restar() {
        resultado = numero1 - numero2;
        System.out.println("La resta es : " + resultado + " ");
    }

}
