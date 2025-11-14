using miPrimerApiRestfull.models;

namespace miPrimerApiRestfull.service
{
    public interface IPilotoService
    {
        List<Pilotos> GetPilotos();

        void CrearPiloto(Pilotos piloto);


         Pilotos GetPilotosById(int id);

        List<Pilotos> GetPilotosByidByName(int id, string nombre);






    }
}
