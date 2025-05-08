using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services
{
    public interface IPolicyService
    {
        List<PolicyViewModel> Get();
        PolicyViewModel Get(int id);
        PolicyViewModel Add(PolicyViewModel policy);
        void Edit(int id, PolicyViewModel policy);
        void Delete(int id);
    }
}
