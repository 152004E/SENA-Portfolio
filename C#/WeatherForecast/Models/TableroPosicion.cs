
namespace ChessProject.Models
{
    public class TableroPosicion
    {
        public int Id { get; set; }
        public int PartidaId { get; set; }
        public int MovimientoId { get; set; }
        public string Fen { get; set; }
    }
}
