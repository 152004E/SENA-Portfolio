using CarsApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

//Agregar inyeccion de dependecias
builder.Services.AddScoped<ICarService, CarService>();


var app = builder.Build();



app.MapControllers();

app.Run();
