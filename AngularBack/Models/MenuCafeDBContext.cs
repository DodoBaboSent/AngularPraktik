using Microsoft.EntityFrameworkCore;

namespace AngularBack.Models
{
    public class MenuCafeDBContext : DbContext
    {
        public MenuCafeDBContext(DbContextOptions<MenuCafeDBContext> options) : base(options) { }

        public DbSet<MenuCafe> MenuCafeSet { get; set; } = null!;
    }
}
