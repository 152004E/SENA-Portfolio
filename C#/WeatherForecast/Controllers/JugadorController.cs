using ChessProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using WebApplicationConDB.Services;

namespace WebApplicationConDB.Controllers
{
    [ApiController]
    [Route("/Jugador")]
    public class JugadorController : ControllerBase
    {
        private readonly IJugadorService _jugadorService;
        public JugadorController(IJugadorService jugadorService)
        {
            _jugadorService = jugadorService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var jugadores = _jugadorService.GetAll();
            if (jugadores == null)
                return NotFound();

            return Ok(jugadores);
        }
        [HttpPost]
        public IActionResult Create([FromBody] Jugador jugador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            jugador.FechaRegistro = DateTime.UtcNow;

            _jugadorService.create(jugador);

            return Ok(jugador);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var jugadores = _jugadorService.GetById(id);
            if (jugadores == null)
            {
                return NotFound($"Jugador no encontrado por el id :{id}");
            }
            return Ok(jugadores);
        }

        [HttpGet("email/{email}")]
        public IActionResult GetByEmail(string email)
        {
            var jugadores = _jugadorService.GetByEmail(email);
            if (jugadores == null)
            {
                return NotFound($"Jugador no encontrado por el Email :{email}");
            }
            return Ok(jugadores);
        }
        [HttpPut("{id:int}")]
        public IActionResult Update(int id, [FromBody] Jugador jugador)
        {

            if (jugador == null)
            {
                return BadRequest("Datos invalidos");
            }
            var actualizado = _jugadorService.Update(id, jugador);
            if (!actualizado)
            {
                return NotFound($"El jugador con el id : {id} no existe");
            }

            return Ok("jugador actualizado exitosamente");
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var eliminado = _jugadorService.Delete(id);

            if (!eliminado)
            {
                return NotFound($"Jugador no encontrado por el id : {id}");
            }
            return Ok($"Eliminado exitosamente con el id{id}");

        }

    }
}
