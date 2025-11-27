using ChessProject.Models;

namespace WebApplicationConDB.Services
{
    public class MovimientoService : IMovimientosService
    {
        private readonly List<Movimiento> _movimiento = new List<Movimiento>();
         public void Create(Movimiento movimiento)
        {
            _movimiento.Add(movimiento);
        }

        public List<Movimiento> GetAll()
        {
            return _movimiento;
        }

        public Movimiento getById(int id)
        {
            return _movimiento.Where(x => x.MovimientoId == id).FirstOrDefault();
        }

        public List<Movimiento> GetPorcolor(string Color)
        {
            throw new NotImplementedException();
        }
    }
}
