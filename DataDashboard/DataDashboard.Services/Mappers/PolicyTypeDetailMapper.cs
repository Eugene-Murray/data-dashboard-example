using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public class PolicyTypeDetailMapper : IPolicyTypeDetailMapper
    {
        public List<PolicyTypeDetailViewModel> Map(List<PolicyTypeDetail> policyDetails)
        {
            return policyDetails.Select(p => new PolicyTypeDetailViewModel()
            {
                Id = p.Id,
                PolicyName = p.PolicyName,
                PolicyDescription = p.PolicyDescription,
                PolicyType = p.PolicyType

            }).ToList();
        }
    }
}
