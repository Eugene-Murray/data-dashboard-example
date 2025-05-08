using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public class PolicyMapper : IPolicyMapper
    {
        public PolicyViewModel Map(Policy policy)
        {
            return new PolicyViewModel()
            {
                Id = policy.Id,
                PolicyNumber = policy.PolicyNumber,
                PolicyTypeDetailId = policy.PolicyTypeDetailId,
                PolicyHolder = new PolicyHolderViewModel()
                {
                    Id = policy.PolicyHolder.Id,
                    Name = policy.PolicyHolder.Name,
                    Age = policy.PolicyHolder.Age,
                    Gender = policy.PolicyHolder.Gender
                },
            };
        }

        public Policy Map(PolicyViewModel policy)
        {
            return new Policy()
            {
                Id = policy.Id,
                PolicyNumber = policy.PolicyNumber,
                PolicyTypeDetailId = policy.PolicyTypeDetailId,
                PolicyHolderId = policy.PolicyHolder.Id,
                PolicyHolder = new PolicyHolder()
                {
                    Id = policy.PolicyHolder.Id,
                    Name = policy.PolicyHolder.Name,
                    Age = policy.PolicyHolder.Age,
                }
            };
        }

        public List<PolicyViewModel> Map(List<Policy> policies)
        {
            return policies.Select(policy => new PolicyViewModel()
            {
                Id = policy.Id,
                PolicyNumber = policy.PolicyNumber,
                PolicyTypeDetailId = policy.PolicyTypeDetailId,
                PolicyHolder = new PolicyHolderViewModel()
                {
                    Id = policy.PolicyHolder.Id,
                    Name = policy.PolicyHolder.Name,
                    Age = policy.PolicyHolder.Age,
                    Gender = policy.PolicyHolder.Gender
                }
            }).ToList();
        }
    }
}
