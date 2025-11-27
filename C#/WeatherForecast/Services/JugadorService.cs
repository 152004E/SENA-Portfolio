using ChessProject.Models;
using Microsoft.EntityFrameworkCore;
using WebApplicationConDB.Data;

namespace WebApplicationConDB.Services
{
    public class JugadorService : IJugadorService
    {
        private readonly AppDbContext _context;
        public JugadorService(AppDbContext context)
        {
            _context = context;
        }

        public void create(Jugador jugador)
        {
            _context.Jugadores.Add(jugador);
            _context.SaveChanges();
        }

        public bool Delete(int id)
        {
            var jugador = _context.Jugadores.Find(id);
            if (jugador == null)
            {
                return false;
            }
            _context.Jugadores.Remove(jugador);

            _context.SaveChanges();
            return true;

        }

        public List<Jugador> GetAll()
        {
            var jugadores = _context.Jugadores.ToList();
            return jugadores;
        }

        public Jugador GetByEmail(string email)
        {
            return _context.Jugadores
                .Where(j =>
j.Email
 == email)
                .FirstOrDefault();
        }


        public Jugador GetById(int id)
        {

            return _context.Jugadores
                .Where(j => j.JugadorId == id)
                .FirstOrDefault();
        }

        public Jugador GetByName(string name)
        {
            return _context.Jugadores
                 .Where(j => j.Nombre == name)
                 .FirstOrDefault();
        }

        public bool Update(int id, Jugador jugador)
        {

            var jugadorActualizado = _context.Jugadores.Find(id);

            if (jugadorActualizado == null)
            {
                return false;
            }

            jugadorActualizado.Nombre = jugador.Nombre;

            jugadorActualizado.Email
             =
            jugador.Email
            ;
            jugadorActualizado.PasswordHash = jugador.PasswordHash;

            _context.SaveChanges();
            return true;

        }
    }
}
