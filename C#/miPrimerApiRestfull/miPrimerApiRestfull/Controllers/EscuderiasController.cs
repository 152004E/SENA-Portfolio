using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using miPrimerApiRestfull.models;
using miPrimerApiRestfull.service;

namespace miPrimerApiRestfull.Controllers
{
    [ApiController]
    [Route("/Escuderias")]
    public class EscuderiasController : ControllerBase
    {
        private readonly IEscuderiaService _escuderiaService;
        public EscuderiasController(IEscuderiaService escuderiaService)
        {
            _escuderiaService = escuderiaService;
        }

        [HttpGet]

        public IActionResult Get()
        {
            var escuderias = _escuderiaService.GetEscuderias();
            return Ok(escuderias);
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            var escuderias = _escuderiaService.GetEscuderiasById(id);
            if (escuderias == null)
            {
                return NotFound();
            }
            return Ok(escuderias);


        }


        [HttpPost]

        public IActionResult crear(Escuderias escuderia) {
            _escuderiaService.CrearEscuderia(escuderia);

            return Created();
        }

        [HttpGet("Pais/{pais}")]

        public IActionResult GetEscuderiasPorPais(string pais) {
            var escuderias = _escuderiaService.GetEscuderiasPorPais(pais);
            if (escuderias == null)
            {
                return NotFound($"No se encontro escuderias en {pais}");
            }


            return Ok(escuderias); 
        
        }


    }
}
