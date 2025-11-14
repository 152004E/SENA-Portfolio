using miPrimerApiRestfull.models;

namespace miPrimerApiRestfull.service
{
    public interface IEscuderiaService
    {
        List<Escuderias> GetEscuderias();
        Escuderias GetEscuderiasById(int id);

        void CrearEscuderia(Escuderias escuderias);

        List<Escuderias> GetEscuderiasPorPais(string pais);



    }
}
