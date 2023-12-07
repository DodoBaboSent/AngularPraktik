using Microsoft.EntityFrameworkCore;

namespace AngularBack.Models
{
    public class PersonDBContext : DbContext
    {
        public PersonDBContext(DbContextOptions<PersonDBContext> options) : base(options) { }

        public DbSet<Person> PersonSet { get; set; } = null!;
    }
}
