using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public interface IPolicyMapper
    {
        List<PolicyViewModel> Map(List<Policy> policy);
        PolicyViewModel Map(Policy policy);
        Policy Map(PolicyViewModel policy);
    }
}
