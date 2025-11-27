using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public interface IPartidaServise
    {
        List<Partida> GetAll();

        Partida getById(int id);

        void Create(Partida partida);
        List<Partida> TipoPartida(string TipoPartida);
    }
}
