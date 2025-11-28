using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChessProject.Models;
using WebApplicationConDB.Data;
using WebApplicationConDB.Services;

namespace WebApplicationConDB.Controllers
{
    [Route("api/Partidas")]
    [ApiController]
    public class PartidasController : ControllerBase
    {
        private readonly IPartidaService _partidaservice;

        public PartidasController(IPartidaService partidaservice)
        {
            _partidaservice = partidaservice;
        }



        // GET: api/Partidas
        [HttpGet]
        public IActionResult GetAll()
        {
            var partida = _partidaservice.GetAll();
            return Ok(partida);
        }

        //Creacion de una partida
        [HttpPost]
        public IActionResult Create([FromBody] Partida partida)
        {
            _partidaservice.Create(partida);
            return Ok("Partida creada exitosamente");
        }

        // GET: api/Partidas/5
        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var partida = _partidaservice.GetById(id);

            if (partida == null)
            {
                return NotFound($"Partida no encontra por el id : {id}");
            }

            return Ok(partida);
        }
        // GET: api/Partidas/5 por tipo de partida
        [HttpGet("TipoPartida/{TipoPartida}")]
        public IActionResult TipoPartida(string TipoPartida)
        {
            var partida = _partidaservice.TipoPartida(TipoPartida);

            if (partida == null || partida.Count == 0)
            {
                return NotFound($"Pardia no encontra por el id : {TipoPartida}");
            }

            return Ok(partida);
        }
        // PUT: api/Partidas/5
        [HttpPut("{id:int}")]
        public IActionResult Update(int id,[FromBody] Partida partida)
        {
            var partidaactual = _partidaservice.Update(id, partida);

            if (!partidaactual)
            {
                return NotFound($"No se encontraron partidas por el id : {id}");
            }
            return Ok("La partida actualizada exitasamente.");
            
        }

        

        // DELETE: api/Partidas/5
        
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var elimidano = _partidaservice.Delete(id);
            if (!elimidano)
            {
                return NotFound($"No se encontraron partidas por el id : {id}");
            }
            return Ok("La partida se elimino exisamente");
        }

        
        
    }
}
