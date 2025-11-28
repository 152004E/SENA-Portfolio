using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public interface IPartidaService
    {
        List<Partida> GetAll();

        Partida GetById(int id);

        void Create(Partida partida);
        bool Update(int id, Partida partida);
        bool Delete(int id);
        List<Partida> TipoPartida(string TipoPartida);
    }
}
