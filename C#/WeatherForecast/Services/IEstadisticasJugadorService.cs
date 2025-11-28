using ChessProject.Models;

namespace
WebApplicationConDB.Services

{
    public interface IEstadisticasJugadorService
    {
        List<EstadisticasJugador> GetEstadisticasJugador();
        void Create(EstadisticasJugador estadisticasJugador);
        EstadisticasJugador GetById(int Id);
        EstadisticasJugador Update(int id, EstadisticasJugador estadisticasJugador);
        void Delete(int id);
    }

}