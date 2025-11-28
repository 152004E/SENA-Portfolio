using ChessProject.Models;
using
WebApplicationConDB.Data
;

namespace
WebApplicationConDB.Services

{
    public class EstadisticasJugadorService : IEstadisticasJugadorService
    {

        private readonly AppDbContext _context;


        public EstadisticasJugadorService(AppDbContext context)
        {
            _context = context;
        }
        //Listar
        public List<EstadisticasJugador> GetEstadisticasJugador()
        {
            var estadisticasJugador = _context.EstadisticasJugadores.ToList();
            return estadisticasJugador;
        }

        //Crear
        public void Create(EstadisticasJugador estadisticasJugador)
        {
            _context.EstadisticasJugadores.Add(estadisticasJugador);
            _context.SaveChanges();
        }

        //Actualizar
        public EstadisticasJugador Update(int id, EstadisticasJugador estadisticasJugador)
        {
            var EstadisticasActualizadas = _context.EstadisticasJugadores.Find(id);

            if (EstadisticasActualizadas == null)
            {
                Console.WriteLine($"No se encontró el jugador con el id {id}");

            }
            else
            {
                EstadisticasActualizadas.PartidasJugadas = estadisticasJugador.PartidasJugadas;
                EstadisticasActualizadas.Victorias = estadisticasJugador.Victorias;
                EstadisticasActualizadas.Derrotas = estadisticasJugador.Derrotas;
                EstadisticasActualizadas.Empates = estadisticasJugador.Empates;
                EstadisticasActualizadas.PorBlancas = estadisticasJugador.PorBlancas;
                EstadisticasActualizadas.PorNegras = estadisticasJugador.PorNegras;
                EstadisticasActualizadas.TiempoTotalJugado = estadisticasJugador.TiempoTotalJugado;

                _context.SaveChanges();

            }


            return EstadisticasActualizadas;

        }
        //Eliminar
        public void Delete(int id)
        {
            var estadisticasEliminar = _context.EstadisticasJugadores.FirstOrDefault(j => j.JugadorId == id);

            if (estadisticasEliminar != null)
            {
                _context.EstadisticasJugadores.Remove(estadisticasEliminar);
                _context.SaveChanges();
            }
        }


        //Buscar por id
        public EstadisticasJugador GetById(int Id)
        {
            return _context.EstadisticasJugadores
                .Where(j => j.EstadisticasJugadorId == Id)
                .FirstOrDefault();
        }


    }
}