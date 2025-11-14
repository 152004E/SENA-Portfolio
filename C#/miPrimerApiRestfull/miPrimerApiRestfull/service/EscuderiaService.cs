using miPrimerApiRestfull.models;

namespace miPrimerApiRestfull.service
{
    public class EscuderiaService : IEscuderiaService
    {
        private readonly List<Escuderias> _escuderias = new List<Escuderias>()
        {
            new Escuderias() { Id = 1  , NombreEscuderia = "Escuderia 111" , JefeDeMecanicos = "Emerson reyes" , Director = "Fabian arias", Presupuesto = 20000000 ,Pais = "Colombia" },

            new Escuderias() { Id = 2, NombreEscuderia = "Escuderia 2", JefeDeMecanicos = "Carlos Ramírez", Director = "Laura Torres", Presupuesto = 35000000, Pais = "España" },
            new Escuderias() { Id = 3, NombreEscuderia = "Escuderia 3", JefeDeMecanicos = "Andrés Molina", Director = "Sofía Díaz", Presupuesto = 45000000, Pais = "México" }



        };

        

        public List<Escuderias> GetEscuderias()
        {
            return _escuderias;
        }

        public Escuderias GetEscuderiasById(int id)
        {
            var resultado = _escuderias.Where(x => x.Id == id).FirstOrDefault();
            return resultado;
        }
        public void CrearEscuderia(Escuderias escuderias)
        {
            _escuderias.Add(escuderias);
        }

        public List<Escuderias> GetEscuderiasPorPais(string pais)
        {
            var resultado = _escuderias.Where(e => e.Pais.ToLower() == pais.ToLower()).ToList();
            return resultado;
            
        }
    }
}

