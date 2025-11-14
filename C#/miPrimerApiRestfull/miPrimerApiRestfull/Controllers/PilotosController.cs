using Microsoft.AspNetCore.Mvc;
using miPrimerApiRestfull.models;
using miPrimerApiRestfull.service;

namespace miPrimerApiRestfull.Controllers
{
    [ApiController]
    [Route("/Pilotos")]
    public class PilotosController : ControllerBase
    {
        private readonly IPilotoService _pilotoservice;
        public PilotosController(IPilotoService pilotoService)
        {
            _pilotoservice = pilotoService;
        }

        [HttpGet]
        
        public IActionResult Get() { 
            var pilotos = _pilotoservice.GetPilotos();
        return Ok(pilotos);
        }

        [HttpPost]
        public IActionResult crear(Pilotos piloto) { 
            _pilotoservice.CrearPiloto(piloto);
            
            return Created();
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            var pilotos = _pilotoservice.GetPilotosById(id);
            if (pilotos == null)
            {
                return NotFound();
            }
            return Ok(pilotos);
        }

        [HttpGet("{id}/{nombre}")]

        public IActionResult Get(int id,string nombre)
        {
            var pilotos = _pilotoservice.GetPilotosByidByName(id,  nombre);
            if (pilotos == null)
            {
                return NotFound();
            }
            return Ok(pilotos);
        }


    }
}
