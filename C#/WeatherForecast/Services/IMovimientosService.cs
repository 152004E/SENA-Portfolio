using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public interface IMovimientosService
    {
        List<Movimiento> GetMovimientos();
        void Create(Movimiento movimiento);
        Movimiento GetById(int id);
        bool Update(int id, Movimiento movimiento);
        bool Delete(int id);
    }
}
