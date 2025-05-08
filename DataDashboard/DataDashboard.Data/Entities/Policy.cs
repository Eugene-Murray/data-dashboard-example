using System.ComponentModel.DataAnnotations;

namespace DataDashboard.Data.Entities
{
    public class Policy
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public int PolicyNumber { get; set; }

        public int PolicyTypeDetailId { get; set; }

        public int PolicyHolderId { get; set; }
        
        public PolicyHolder? PolicyHolder { get; set; }
    }
}