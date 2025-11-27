namespace WebApplicationConDB.Models
{
    public class UserRoles
    {
        public Users User {  get; set; }
        public int IdUsers { get; set; }
        public Roles Role { get; set; }
        public int IdRoles { get; set; }
    }
}
