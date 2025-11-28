using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChessProject.Models;
using
WebApplicationConDB.Data
;
using
WebApplicationConDB.Services
;

namespace WebApplicationConDB.Controllers
{
    [Route("EstadisticasJugador")]
    [ApiController]
    public class EstadisticasJugadorsController : ControllerBase
    {
        private readonly IEstadisticasJugadorService _estadisticasJugadorService;

        public EstadisticasJugadorsController(IEstadisticasJugadorService estadisticasJugadorService)
        {
            _estadisticasJugadorService = estadisticasJugadorService;
        }



        [HttpPost("Crear")]
        public IActionResult Crear([FromBody] EstadisticasJugador estadisticasJugador)
        {

            _estadisticasJugadorService.Create(estadisticasJugador);
            return Created(string.Empty, estadisticasJugador); // Esto muestra la peticion del JSON
        }



        [HttpGet("Listar")]
        public IActionResult GetAll()
        {
            var estadisticas = _estadisticasJugadorService.GetEstadisticasJugador();
            if (estadisticas == null)
            {
                return NotFound();

            }

            return Ok(estadisticas);
        }


        [HttpGet("Id")]
        public IActionResult GetById(int Id)
        {
            var estadisticasId = _estadisticasJugadorService.GetById(Id);
            if (estadisticasId == null)
            {
                return NotFound($"No existe una estadistica con el Id {Id}");
            }
            return Ok(estadisticasId);
        }

        [HttpPut("Actualizar")]
        public IActionResult Actualizar(int id, [FromBody] EstadisticasJugador estadisticasJugador)
        {
            var estadisticasAct = _estadisticasJugadorService.GetById(id);
            if (estadisticasAct == null)
            {
                return NotFound($"No existe una estadística con el ID {id}");
            }

            _estadisticasJugadorService.Update(id, estadisticasJugador);
            return Ok("Estadística actualizada correctamente");
        }



        [HttpDelete("Eliminar")]
        public IActionResult Eliminar(int id)
        {
            var Jugadorinho = _estadisticasJugadorService.GetById(id);
            if (Jugadorinho == null)
            {

                return NotFound($"No existe una estadistica con el ID {id}");
            }
            _estadisticasJugadorService.Delete(id);
            return Ok("Estidistica eliminada correctamente");
        }
    }
}

