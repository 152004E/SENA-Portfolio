    using miPrimerApiRestfull.models;

namespace miPrimerApiRestfull.service
{
    public class PilotoService : IPilotoService
    {
        private readonly List<Pilotos> _pilotos = new List<Pilotos>()
       {
           new Pilotos(){Id = 1, Nombre = "Santiago" , Apellido ="Puentes"},
           new Pilotos(){Id = 2, Nombre = "negro" , Apellido ="Vega"},
           new Pilotos(){Id = 2, Nombre = "negro" , Apellido ="Sanchez"}
       }; 

        public void CrearPiloto(Pilotos piloto)
        {
            _pilotos.Add(piloto);
        }

        public List<Pilotos> GetPilotos() {
            return _pilotos;
        }

        public Pilotos GetPilotosById(int id)
        {
            return _pilotos.Where(x => x.Id == id).FirstOrDefault();
        }
        public List<Pilotos> GetPilotosByidByName(int id, string nombre)
        {
            var listaDePiloto = _pilotos.Where(x => x.Id == id && x.Nombre == nombre).ToList();

            return listaDePiloto; 
        }
    }
}
