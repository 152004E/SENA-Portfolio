
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChessProject.Models
{
    [Table("Partidas")]
    public class Partida
    {
        [Key]
        public int PartidaId { get; set; }
        public int JugadorBlancasId { get; set; }
        public int JugadorNegrasId { get; set; }
        public string? Ganador { get; set; }
        public string? MotivoFin { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public string TipoPartida { get; set; }
    }
}
