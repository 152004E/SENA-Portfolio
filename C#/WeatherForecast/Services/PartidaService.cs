using ChessProject.Models;
using WebApplicationConDB.Data;

namespace WebApplicationConDB.Services
{
    public class PartidaService : IPartidaService
    {
        private readonly AppDbContext _context; 

        public PartidaService(AppDbContext context)
        {
            _context = context;
        }

        public void Create(Partida partida)
        {
           _context.Partidas.Add(partida);
            _context.SaveChanges();
        }

        

        public List<Partida> GetAll()
        {
            return _context.Partidas.ToList();
        }

        public Partida GetById(int id)
        {
            var partidas = _context.Partidas.Where(p => p.PartidaId == id).FirstOrDefault();
            return partidas;
        }

        public List<Partida> TipoPartida(string TipoPartida)
        {
            
            return _context.Partidas.Where(p => p.TipoPartida == TipoPartida).ToList();
        }

        public bool Update(int id, Partida partida)
        {
            var actual = _context.Partidas.Find(id);
            if (actual == null)
            {
               return false;
            }
            actual.TipoPartida = partida.TipoPartida;
            actual.Ganador = partida.Ganador;
            actual.JugadorBlancasId = partida.JugadorBlancasId;
            actual.JugadorNegrasId = partida.JugadorNegrasId;
            _context.SaveChanges();
            return true;
        }
        public bool Delete(int id)
        {
            var actual = _context.Partidas.Find(id);
            if (actual == null)
            {
                return false;
            }
            _context.Partidas.Remove(actual);
            _context.SaveChanges();
            return true;
        }
    }
}
