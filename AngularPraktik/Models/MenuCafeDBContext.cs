using Microsoft.EntityFrameworkCore;

namespace AngularPraktik.Models
{
    public class MenuCafeDBContext : DbContext
    {
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    var ServerVersion = new MySqlServerVersion(new Version(8, 0, 30));
        //    optionsBuilder.UseMySql("server=127.0.0.1;Port=3306;user=root;password=;database=Cafe", ServerVersion);
        //}
        public MenuCafeDBContext(DbContextOptions<MenuCafeDBContext> options) : base(options)
        {

        }
        public DbSet<MenuCafe> MenuCafeSet { get; set; } = null!;
    }
}
