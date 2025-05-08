using DataDashboard.Services.Mappers;
using DataDashboard.Data.Repositories;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services
{
    public class PolicyService : IPolicyService
    {
        private IPolicyRepository _policyRepository;
        private IPolicyMapper _mapper;

        public PolicyService(IPolicyRepository policyRepository, IPolicyMapper mapper)
        {
            _policyRepository = policyRepository;
            _mapper = mapper;
        }

        public void Delete(int id)
        {
            _policyRepository.Delete(id);
        }

        public List<PolicyViewModel> Get()
        {
            var policyList = _policyRepository.Get();
            return _mapper.Map(policyList);
        }

        public PolicyViewModel Get(int id)
        {
            var policy = _policyRepository.Get(id);
            if (policy != null)
            {
                return _mapper.Map(policy);
            }
            return null;
        }

        public PolicyViewModel Add(PolicyViewModel policy)
        {
            var newpolicy = _policyRepository.Create(_mapper.Map(policy));

            return _mapper.Map(newpolicy);
        }

        public void Edit(int id, PolicyViewModel policy)
        {
            _policyRepository.Edit(id, _mapper.Map(policy));
        }
    }
}
