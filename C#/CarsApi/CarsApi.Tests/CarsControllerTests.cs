using Microsoft.AspNetCore.Mvc;
using Moq;
using CarsApi.Controllers;
using CarsApi.Models;
using CarsApi.Services;
using Xunit;

public class CarsControllerTests
{
    private readonly Mock<ICarService> _mockService;
    private readonly CarsController _controller;

    public CarsControllerTests()
    {
        _mockService = new Mock<ICarService>();
        _controller = new CarsController(_mockService.Object);
    }

    [Fact]
    public void GetAll_ShouldReturn200_WithList()
    {
        _mockService.Setup(s => s.GetAll()).Returns(new List<Car>
        {
            new Car{ CarId = 1, Modelo="F1-2024"}
        });

        var result = _controller.GetAll() as OkObjectResult;

        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);

        var list = Assert.IsAssignableFrom<IEnumerable<Car>>(result.Value);
        Assert.Single(list);
    }

    [Fact]
    public void GetById_ShouldReturn200_WhenExists()
    {
        _mockService.Setup(s => s.GetById(1))
            .Returns(new Car { CarId = 1, Modelo = "F1-2024" });

        var result = _controller.GetById(1) as OkObjectResult;

        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);
    }

    [Fact]
    public void GetById_ShouldReturn404_WhenNotFound()
    {
        _mockService.Setup(s => s.GetById(5)).Returns((Car?)null);

        var result = _controller.GetById(5);

        Assert.IsType<NotFoundResult>(result);

    }
}
