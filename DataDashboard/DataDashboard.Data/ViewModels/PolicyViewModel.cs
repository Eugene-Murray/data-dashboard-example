using System.ComponentModel.DataAnnotations;

namespace DataDashboard.Data.ViewModels
{
    public class PolicyViewModel
    {
        public int Id { get; set; }
        
        public int PolicyNumber { get; set; }

        [Required(ErrorMessage = "PolicyType is required")]
        public required int PolicyTypeDetailId { get; set; }
        public PolicyHolderViewModel PolicyHolder { get; set; }
    }
}
