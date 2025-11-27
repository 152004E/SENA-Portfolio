using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public interface IJugadorService
    {
        List<Jugador> GetAll();

        void create(Jugador jugador);
        Jugador GetById(int id);
        Jugador GetByName(string name);
        Jugador GetByEmail(string email);
        bool Update(int id, Jugador jugador);
        bool Delete(int id);
    }
}
