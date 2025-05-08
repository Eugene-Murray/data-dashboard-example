using DataDashboard.Services.Mappers;
using DataDashboard.Data.Repositories;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services
{
    public class PolicyHolderService : IPolicyHolderService
    {
        private IPolicyHolderRepository _policyHolderRepository;
        private IPolicyHolderMapper _mapper;

        public PolicyHolderService(IPolicyHolderRepository policyHolderRepository, IPolicyHolderMapper mapper)
        {
            _policyHolderRepository = policyHolderRepository;
            _mapper = mapper;
        }

        public List<PolicyHolderViewModel> Get()
        {
            var policyHolders = _policyHolderRepository.Get();

            return _mapper.Map(policyHolders);
        }
    }
}
