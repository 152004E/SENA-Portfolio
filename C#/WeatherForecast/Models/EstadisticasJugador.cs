
using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;

namespace ChessProject.Models
{
    public class EstadisticasJugador
    {
        [Key]
        public int EstadisticasJugadorId { get; set; }
        public int JugadorId { get; set; }
        public int PartidasJugadas { get; set; }
        public int Victorias { get; set; }
        public int Derrotas { get; set; }
        public int Empates { get; set; }
        public int PorBlancas { get; set; }
        public int PorNegras { get; set; }
        public int TiempoTotalJugado { get; set; }
    }
}
