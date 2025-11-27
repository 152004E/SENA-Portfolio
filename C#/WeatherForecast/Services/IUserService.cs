using WebApplicationConDB.Models;

namespace WebApplicationConDB.Services
{
    public interface IUserService
    {
        List<Users> getUsers();

        void Create(Users users);
        Users GetById(int id);

        List<Users> GetByNickName(string name, int id);
    }
}
