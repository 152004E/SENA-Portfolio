using ChessProject.Models;
using WebApplicationConDB.Data;

namespace WebApplicationConDB.Services
{
    public class MovimientoService : IMovimientosService
    {

        private readonly AppDbContext _context;


        public MovimientoService(AppDbContext context)
        {
            _context = context;
        }

        //Listar
        public List<Movimiento> GetMovimientos()
        {
            var movimiento = _context.Movimientos.ToList();
            return movimiento;
        }

        //Crear
        public void Create(Movimiento movimiento)
        {
            _context.Movimientos.Add(movimiento);
            _context.SaveChanges();
        }

        //Actualizar
        public bool Update(int id, Movimiento movimiento)
        {
            var movimientoAct = _context.Movimientos.Find(id);

            if (movimientoAct == null)
            {
                return false;

            }
            else
            {
                movimientoAct.PartidaId = movimiento.PartidaId;
                movimientoAct.NumeroTurno = movimiento.NumeroTurno;
                movimientoAct.Color = movimiento.Color;
                movimientoAct.Notacion = movimiento.Notacion;
                movimientoAct.Origen = movimiento.Origen;
                movimientoAct.Destino = movimiento.Destino;
                movimientoAct.Pieza = movimiento.Pieza;
                movimientoAct.PiezaCapturada = movimiento.PiezaCapturada;

                _context.SaveChanges();

            }


            return true; 
        }

        //Eliminar
        public bool Delete(int id)
        {
            var actual = _context.Movimientos.Find(id);
            if (actual == null)
            {
                return false;
            }
            _context.Movimientos.Remove(actual);
            _context.SaveChanges();
            return true;
        }

        //Buscar  movimiento por id
        public Movimiento GetById(int id)
        {
            return _context.Movimientos
                .Where(j => j.MovimientoId == id)
                .FirstOrDefault();
        }



    }
}