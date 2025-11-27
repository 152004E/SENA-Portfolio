using CarsApi.Models;

namespace CarsApi.Services;

public interface ICarService
{
    public Car? GetById(int id);

    public List<Car> GetAll();
}
