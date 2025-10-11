import java.util.Scanner;		//Dependencia necesaria
public class Usuario {
	public static void main(String args[]) {
		Scanner entrada = new Scanner(System.in);	
		System.out.print("Ingrese su nombre: ");
        		String nombre = entrada.nextLine();
        		System.out.print("Ingrese su edad: ");
        		int edad = entrada.nextInt();
		System.out.print("Ingrese su estatura: ");
        		double est = entrada.nextDouble();
    		System.out.println("Hola " + nombre + ", tienes " + edad + " años y tu estatura es " + est);
	        	entrada.close();  		// Cerrar el Scanner
}	}