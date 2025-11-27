using WebApplicationConDB.Models;

namespace WebApplicationConDB.Services
{
    public class RolService : IRolService
    {
        private readonly List<Roles> _roles = new List<Roles>()
        {
            new Roles(){ IdRoles = 1 , RoleName = "Administrador"},
            new Roles(){ IdRoles = 2 , RoleName = "Usuario"}
        };
        public void Create(Roles role)
        {
            _roles.Add(role);
        }

        public Roles GetById(int id)
        {
            return _roles.Where(x => x.IdRoles == id).FirstOrDefault();
        }

        public List<Roles> GetByName(string name,int id)
        {
            var getRoles = _roles.Where(x => x.IdRoles == id && x.RoleName == name);
            return getRoles.ToList();
        }

        public List<Roles> getRoles()
        {
            return _roles;
        }
    }
}
