using DataDashboard.Data.Entities;

namespace DataDashboard.Data.ViewModels
{
    public class PolicyTypeDetailViewModel
    {
        public required int Id { get; set; }
        public required string PolicyName { get; set; } = string.Empty;
        public required string PolicyDescription { get; set; } = string.Empty;
        public required PolicyType PolicyType { get; set; }
    }
}
