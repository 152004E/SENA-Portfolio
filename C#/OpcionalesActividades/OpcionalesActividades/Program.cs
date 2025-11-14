using System;

class Persona
{
    // Atributos
    public string Nombre { get; set; }
    public int Edad { get; set; }

    // Constructor
    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    // Método
    public void Saludar()
    {
        Console.WriteLine($"¡Hola! Mi nombre es {Nombre} y tengo {Edad} años.");
    }
}

class Program
{
    static void Main()
    {
        Persona persona1 = new Persona("emerson reyes", 20);
        persona1.Saludar();
    }
}
