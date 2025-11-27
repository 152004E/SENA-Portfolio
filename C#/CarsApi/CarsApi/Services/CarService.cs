using CarsApi.Models;

namespace CarsApi.Services;

public class CarService : ICarService
{ 
    private readonly List<Car> _cars = new()
    {
        new Car { CarId = 1, EscuderiaId = 1, Modelo = "F1-2024", PotenciaHP = 1050, Año = 2024 },
        new Car { CarId = 2, EscuderiaId = 2, Modelo = "RB-2024", PotenciaHP = 1040, Año = 2024 }
    };

    public List<Car> GetAll() => _cars;

    public Car? GetById(int id) { 
       var car =  _cars.Where(f  => f.CarId == id).FirstOrDefault();
        return car;
        
    }
}
