package parte3.persona;

public class Main {
    public static void main(String[] args) {
        // Crear una instancia de Persona
        Persona persona = new Persona("Juan", 30);
        
        // NO reciben parametros y NO retornan un valor
        persona.mostrarDatos();
        
        // NO reciben parametros y SI retornan un valor
        System.out.println("Edad obtenida: " + persona.edad());
    }
    
}
