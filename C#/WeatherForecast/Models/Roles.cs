using System.ComponentModel.DataAnnotations;

namespace WebApplicationConDB.Models
{
    public class Roles
    {
        [Key]

        public int IdRoles { get; set; }
        public string RoleName { get; set; }

        public List<UserRoles>? UserRoles { get; set; }
    }
}
