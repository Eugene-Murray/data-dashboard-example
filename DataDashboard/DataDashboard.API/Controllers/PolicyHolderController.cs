using Microsoft.AspNetCore.Mvc;
using DataDashboard.Data.ViewModels;
using DataDashboard.Services;

namespace DataDashboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyHolderController : ControllerBase
    {
        private IPolicyHolderService _policyHolderService;

        public PolicyHolderController(IPolicyHolderService policyHolderService)
        {
            _policyHolderService = policyHolderService;
        }

        [HttpGet]
        public ActionResult<List<PolicyHolderViewModel>> Get()
        {
            return Ok(_policyHolderService.Get());
        }
    }
}
