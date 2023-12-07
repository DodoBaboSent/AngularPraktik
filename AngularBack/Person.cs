using System.ComponentModel.DataAnnotations.Schema;

namespace AngularBack
{
    [Table("PersonTable")]
    public class Person
    {
        public int ?Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
