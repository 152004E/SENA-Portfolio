namespace CarsApi.Models;

public class Car
{
    public int CarId { get; set; }
    public int EscuderiaId { get; set; }
    public string Modelo { get; set; } = string.Empty;
    public int PotenciaHP { get; set; }
    public int Año { get; set; }
}
