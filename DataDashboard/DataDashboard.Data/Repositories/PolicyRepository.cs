using Microsoft.EntityFrameworkCore;
using DataDashboard.Data.Entities;

namespace DataDashboard.Data.Repositories
{
    public class PolicyRepository : IPolicyRepository
    {
        private PolicyContext _db;
        public PolicyRepository(PolicyContext db)
        {
            _db = db;
        }

        public void Delete(int id)
        {
            _db.Policies.Remove(_db.Policies.Find(id));
            _db.SaveChanges();
        }

        public List<Policy> Get()
        {
            return _db.Policies
                .Include(p => p.PolicyHolder)
                .ToList();
        }

        public Policy Get(int id) => _db.Policies.Find(id);

        public Policy Create(Policy policy)
        {
            policy.PolicyNumber = new Random().Next(1, 100000);
            var newPolicy = _db.Policies.Add(policy);
            _db.SaveChanges();

            return newPolicy.Entity;
        }

        public void Edit(int id, Policy policyUpdate)
        {
            var policy = _db.Policies.FirstOrDefault(p => p.Id == id);

            if (policy != null)
            {
                policy.PolicyHolder = policyUpdate.PolicyHolder;
                policy.PolicyTypeDetailId = policyUpdate.PolicyTypeDetailId;

                _db.SaveChanges();
            }
        }
    }
}
