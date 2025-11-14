using System.ComponentModel.DataAnnotations;

namespace miPrimerApiRestfull.models
{
    public class Escuderias
    {
        [Key]
        public int Id { get; set; }
        public string NombreEscuderia { get; set; }


        public string JefeDeMecanicos { get; set; }

        public string Director { get; set; }


        public float Presupuesto { get; set; }

        public string Pais { get; set; }





    }
}
