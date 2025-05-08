using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public class PolicyHolderMapper : IPolicyHolderMapper
    {
        public List<PolicyHolderViewModel> Map(List<PolicyHolder> policyHolders)
        {
            return policyHolders.Select(p => new PolicyHolderViewModel()
            {
                Id = p.Id,
                Name = p.Name,
                Age = p.Age,
                Gender = p.Gender

            }).ToList();
        }
    }
}
