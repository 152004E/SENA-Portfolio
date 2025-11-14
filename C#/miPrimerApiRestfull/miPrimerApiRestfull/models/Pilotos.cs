using System.ComponentModel.DataAnnotations;
namespace miPrimerApiRestfull.models
{
    public class Pilotos
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength]
        public string Nombre { get; set; }

        public string? Apellido { get; set; }
        public DateTime? Dob {  get; set; } // fecha de nacimiento


    }
}
