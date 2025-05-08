using DataDashboard.Data.Entities;

namespace DataDashboard.Data.ViewModels
{
    public class PolicyHolderViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
    }
}
