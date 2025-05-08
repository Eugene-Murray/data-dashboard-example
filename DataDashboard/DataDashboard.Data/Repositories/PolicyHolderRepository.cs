using DataDashboard.Data.Entities;

namespace DataDashboard.Data.Repositories
{
    public class PolicyHolderRepository : IPolicyHolderRepository
    {
        PolicyContext _db;
        public PolicyHolderRepository(PolicyContext db)
        {
            _db = db;
        }

        public List<PolicyHolder> Get()
        {
            return _db.PolicyHolders.ToList();
        }
    }
}
