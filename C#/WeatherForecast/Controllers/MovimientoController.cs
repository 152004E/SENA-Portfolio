using ChessProject.Models;
using Microsoft.AspNetCore.Mvc;
using WebApplicationConDB.Services;



namespace WebApplicationConDB.Controllers
{
    [Route("api/Movimiento")]
    [ApiController]
    public class MovimientoController : ControllerBase
    {
        private readonly IMovimientosService _movimientoService;
        public MovimientoController(IMovimientosService movimientoService)
        {
            _movimientoService = movimientoService;
        }





        //Obtener todas las listas
        [HttpGet]
        public IActionResult GetMovimientos()
        {
            var movimientos = _movimientoService.GetMovimientos();
            if (movimientos == null)
            {
                return NotFound("No se han encontrado movimientos");

            }

            return Ok(movimientos);
        }
        [HttpPost]
        public IActionResult Crear([FromBody] Movimiento movimiento)
        {
            _movimientoService.Create(movimiento);

            return Ok("El movimiento creado exitosamente");

        }


        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var movimientosId = _movimientoService.GetById(id);
            if (movimientosId == null)
            {
                return NotFound($"No existe una estadistica con el JugadorId {id}");
            }
            return Ok(movimientosId);
        }

        //Actualizar por el id
        [HttpPut("{id:int}")]
        public IActionResult Actualizar(int id, [FromBody] Movimiento movimiento)
        {
            var movimientoActualizar = _movimientoService.Update(id, movimiento);
            if (!movimientoActualizar)
            {
                return NotFound($"No se encontraron partidas por el id : {id}");
            }
            return Ok("La partida actualizada exitasamente.");
        }


        //Eliminar por id
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var MovimientoEliminar = _movimientoService.Delete(id);
            if (!MovimientoEliminar)
            {
                return NotFound($"No existe un movimiento con el ID {id}");
            }
  
            return Ok("Movimiento eliminado correctamente");
        }


    }
}