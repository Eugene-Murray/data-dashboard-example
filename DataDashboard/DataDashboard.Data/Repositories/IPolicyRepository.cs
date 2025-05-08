using DataDashboard.Data.Entities;

namespace DataDashboard.Data.Repositories
{
    public interface IPolicyRepository
    {
        List<Policy> Get();
        Policy Get(int id);
        Policy Create(Policy policy);
        void Edit(int id, Policy policy);
        void Delete(int id);
    }
}
