using Microsoft.AspNetCore.Mvc;
using CarsApi.Services;

namespace CarsApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    private readonly ICarService _service;

    public CarsController(ICarService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var cars = _service.GetAll();
        return Ok(cars);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var cars = _service.GetById(id);

        if (cars == null)
        {
            return NotFound();
        }
        return Ok(cars);
    }
}
