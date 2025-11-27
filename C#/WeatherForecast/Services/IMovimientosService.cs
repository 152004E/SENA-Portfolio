using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public interface IMovimientosService
    {
        List<Movimiento> GetAll();

        Movimiento getById(int id);

        void Create(Movimiento movimiento);
        List<Movimiento> GetPorcolor(string Color);
    }
}
