using System.ComponentModel.DataAnnotations;

namespace DataDashboard.Data.Entities
{
    public class PolicyHolder
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } 

        [Required]
        public int Age { get; set; }

        [Required]
        public Gender Gender { get; set; }

        public ICollection<Policy> Policies { get; set; }
    }
}


