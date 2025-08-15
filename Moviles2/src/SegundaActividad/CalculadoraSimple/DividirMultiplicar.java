package SegundaActividad.CalculadoraSimple;
import java.util.Scanner;

public class DividirMultiplicar {
    private int numero1;
    private int numero2;
    
    public int getNumero1() {
        return numero1;
    }
    public void setNumero1Scanner(int numero1){
        if (numero1 > 0){
            this.numero1 = numero1;
        }else{
            System.out.println("Numero no valido para hacer la operacion");
        }
    }
     public int getNumero2() {
        return numero2;
    }
     public void setNumero2Scanner(int numero2){
        if (numero2 > 0){
            this.numero2 = numero2;
        }else{
            System.out.println("Numero no valido para esta operacion");
        }
    }
     public double division (){
        return numero1 / numero2;
    }

    public void LeerDatos(){

        Scanner LeerDatos = new Scanner(System.in);
        System.out.println("Esta operacion es para dividir ");
        System.out.println("Escribe el primer numero");
        //usamos el set
        setNumero1Scanner(LeerDatos.nextInt());
        System.out.println("Escribe el segundo numero");
        //usamos el set
        setNumero2Scanner(LeerDatos.nextInt());

       
    }
     public double multiplicacion (){
        return numero1 * numero2;
    }

    public void LeerDatosMul(){

        Scanner LeerDatosMul = new Scanner(System.in);
        System.out.println("Esta operacion es para Multiplicacion ");
        System.out.println("Escribe el primer numero");
        //usamos el set
        setNumero1Scanner(LeerDatosMul.nextInt());
        System.out.println("Escribe el segundo numero");
        //usamos el set
        setNumero2Scanner(LeerDatosMul.nextInt());

        LeerDatosMul.close();
    }
}
