using WebApplicationConDB.Models;

namespace WebApplicationConDB.Services
{
    public class UserService : IUserService
    {
        private readonly List<Users> _users = new List<Users>()
        {
            new Users(){ IdUsers = 1 , NickName = "El Mejor" , Correo = "Correo" , Password = "12345"},
           
        };
        public void Create(Users users)
        {
             _users.Add(users);
        }

        public Users GetById(int id)
        {
            return _users.Where(x => x.IdUsers == id).FirstOrDefault();
        }

        public List<Users> GetByNickName(string name, int id)
        {
            var getUsers = _users.Where(x => x.IdUsers == id && x.NickName == name);
            return getUsers.ToList();
        }

        public List<Users> getUsers()
        {
            return _users;
        }
    }
}
