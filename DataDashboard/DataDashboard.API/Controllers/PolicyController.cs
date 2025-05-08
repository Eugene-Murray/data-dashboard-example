using Microsoft.AspNetCore.Mvc;
using DataDashboard.Data.ViewModels;
using DataDashboard.Services;

namespace DataDashboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private IPolicyService _policyService;

        public PolicyController(IPolicyService policyService)
        {
            _policyService = policyService;
        }

        [HttpGet]
        public ActionResult<List<PolicyViewModel>> Get()
        {
            return Ok(_policyService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult<PolicyViewModel> Get(int id)
        {
            var policy = _policyService.Get(id);

            if (policy == null)
            {
                return NotFound();
            }

            return Ok(policy);
        }

        [HttpPost]
        public IActionResult Post([FromBody] PolicyViewModel policy)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var newPolicy = _policyService.Add(policy);

                return CreatedAtAction(nameof(Get), new { id = newPolicy.Id }, newPolicy);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] PolicyViewModel policy)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                _policyService.Edit(id, policy);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // TODO: Log exception / do not return to UI...
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _policyService.Delete(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound("policy not found");
            }
        }
    }
}
