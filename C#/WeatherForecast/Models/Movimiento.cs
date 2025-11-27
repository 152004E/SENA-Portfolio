
namespace ChessProject.Models
{
    public class Movimiento
    {
        public int MovimientoId { get; set; }
        public int PartidaId { get; set; }
        public int NumeroTurno { get; set; }
        public string Color { get; set; }
        public string Notacion { get; set; }
        public string Origen { get; set; }
        public string Destino { get; set; }
        public string Pieza { get; set; }
        public string PiezaCapturada { get; set; }
    }
}
