using WebApplicationConDB.Models;

namespace WebApplicationConDB.Services
{
    public interface IRolService
    {
        List<Roles> getRoles();

        void Create(Roles role);
        Roles GetById(int id);

        List<Roles> GetByName(string name, int id);
    }
}
