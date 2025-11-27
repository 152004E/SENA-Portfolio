using System.ComponentModel.DataAnnotations;

namespace WebApplicationConDB.Models
{
    public class Users
    {
        [Key]
        public int IdUsers {  get; set; }
        public string NickName { get; set; }

        public string Correo { get; set; }

        public string Password { get; set; }

        public List<UserRoles> UserRoles { get; set; }
    }
}
