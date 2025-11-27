
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ChessProject.Models
{
    [Table("Jugadores")]
    public class Jugador
    {
        [Key]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int JugadorId { get; set; }
        [Required]
        [MaxLength(80)]
        public string Nombre { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string PasswordHash { get; set; }
        public DateTime? FechaRegistro { get; set; }
    }
}
