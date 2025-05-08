using DataDashboard.Services.Mappers;
using DataDashboard.Data.Repositories;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services
{
    public class PolicyTypeDetailService : IPolicyTypeDetailService
    {
        private IPolicyTypeDetailRepository _policyDetailRepository;
        private IPolicyTypeDetailMapper _mapper;

        public PolicyTypeDetailService(IPolicyTypeDetailRepository policyDetailRepository, IPolicyTypeDetailMapper mapper)
        {
            _policyDetailRepository = policyDetailRepository;
            _mapper = mapper;
        }

        public List<PolicyTypeDetailViewModel> Get()
        {
            var departments = _policyDetailRepository.Get();

            return _mapper.Map(departments);
        }
    }
}
