using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services
{
    public interface IPolicyHolderService
    {
        List<PolicyHolderViewModel> Get();
    }
}
