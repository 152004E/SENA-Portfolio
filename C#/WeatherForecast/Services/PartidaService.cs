using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public class PartidaService : IPartidaServise
    {
        private readonly List<Partida> _partidaList = new List<Partida>()
        {
        };


        public void Create(Partida partida)
        {
           _partidaList.Add(partida);
        }

        public List<Partida> GetAll()
        {
            return _partidaList;
        }

        public Partida getById(int id)
        {
            return _partidaList.Where(x => x.PartidaId == id).FirstOrDefault();
        }

        public List<Partida> TipoPartida(string TipoPartida)
        {
            return null;
        }
    }
}
