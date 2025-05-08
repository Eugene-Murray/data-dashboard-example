using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;

namespace DataDashboard.Services.Mappers
{
    public interface IPolicyTypeDetailMapper
    {
        List<PolicyTypeDetailViewModel> Map(List<PolicyTypeDetail> department);
    }
}
