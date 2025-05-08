using Microsoft.AspNetCore.Mvc;
using DataDashboard.Data.ViewModels;
using DataDashboard.Services;

namespace DataDashboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyTypeDetailsController : ControllerBase
    {
        private IPolicyTypeDetailService _policyDetailService;

        public PolicyTypeDetailsController(IPolicyTypeDetailService policyDetailService)
        {
            _policyDetailService = policyDetailService;
        }

        [HttpGet]
        public ActionResult<List<PolicyTypeDetailViewModel>> Get()
        {
            return Ok(_policyDetailService.Get());
        }
    }
}
