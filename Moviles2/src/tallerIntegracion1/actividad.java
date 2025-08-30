package tallerIntegracion1;

public class Actividad {
    public static void main(String[] args) {

        Estudiante estudiante1 = new Estudiante("Emerson", "Reyes", "Contaduría");

        estudiante1.mostrarInformacion();
        System.out.println("Carrera :" + estudiante1.getCarrera());

    }
}
