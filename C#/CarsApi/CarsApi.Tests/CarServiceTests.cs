using CarsApi.Services;
using Xunit;

public class CarServiceTests
{
    private readonly CarService _service = new();

    [Fact]
    public void GetAll_ShouldReturnCars()
    {
        var result = _service.GetAll();
        Assert.NotNull(result);
        Assert.NotEmpty(result);
    }

    [Fact]
    public void GetById_ShouldReturnCorrectCar()
    {

    }

    [Fact]
    public void GetById_ShouldReturnNull_WhenNotFound()
    {

        var result = _service.GetById(999);
        Assert.Null(result);
    }
}
