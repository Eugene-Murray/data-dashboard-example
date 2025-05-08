
using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public interface IPolicyHolderMapper
    {
        List<PolicyHolderViewModel> Map(List<PolicyHolder> policyHolder);
    }
}
