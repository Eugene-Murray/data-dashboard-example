using DataDashboard.Data.Entities;

namespace DataDashboard.Data.Repositories
{
    public class PolicyTypeDetailRepository : IPolicyTypeDetailRepository
    {
        PolicyContext _db;
        public PolicyTypeDetailRepository(PolicyContext db)
        {
            _db = db;
        }

        public List<PolicyTypeDetail> Get()
        {
            return _db.PolicyDetails.ToList();
        }
    }
}
