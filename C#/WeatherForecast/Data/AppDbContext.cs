using ChessProject.Models;
using Microsoft.EntityFrameworkCore;
using WebApplicationConDB.Models;

namespace WebApplicationConDB.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 
        
        }

        //-- DB SET 

        public DbSet<Jugador> Jugadores { get; set;}
        public DbSet<Partida> Partidas { get; set; }
        public DbSet<Movimiento> Movimientos { get; set; }
        public DbSet<EstadisticasJugador> EstadisticasJugadores { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //Aqui se van declarar despues las relaciones !
            modelBuilder.Entity<Jugador>().ToTable("Jugadores");
            modelBuilder.Entity<Partida>().ToTable("Partidas");
            modelBuilder.Entity<Movimiento>().ToTable("Movimientos");
            modelBuilder.Entity<EstadisticasJugador>().ToTable("EstadisticasJugadores");
            modelBuilder.Entity<Users>().ToTable("Users");
            modelBuilder.Entity<Roles>().ToTable("Roles");
            modelBuilder.Entity<UserRoles>().ToTable("UserRoles");


            //relaciones
            modelBuilder.Entity<UserRoles>()
                .HasOne(ur => ur.User)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(ur => ur.IdUsers);

            modelBuilder.Entity<UserRoles>()
                .HasOne(ur => ur.Role)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(ur => ur.IdRoles);

            modelBuilder.Entity<UserRoles>()
                .HasKey(ur => new {ur.IdUsers, ur.IdRoles});



        }

    }
}
