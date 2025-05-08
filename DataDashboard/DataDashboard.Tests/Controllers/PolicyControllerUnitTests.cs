using Microsoft.AspNetCore.Mvc;
using DataDashboard.API.Controllers;
using DataDashboard.Data;
using DataDashboard.Data.Entities;
using DataDashboard.Data.Repositories;
using DataDashboard.Data.ViewModels;
using DataDashboard.Services;
using DataDashboard.Services.Mappers;

namespace DataDashboard.Tests.Controllers
{
    public class PolicyControllerUnitTests : BaseUnitTest
    {
        [Fact]
        public void GetPolicies_ShouldReturnAllPolicies()
        {
            // Arrange
            var options = GetInMemoryDbContextOptions();
            using (var context = new PolicyContext(options))
            {
                context.Policies.Add(
                    new Policy 
                    { 
                        PolicyNumber = 123,
                        PolicyTypeDetailId = 123, 
                        PolicyHolderId = 123, 
                        PolicyHolder = new PolicyHolder 
                        {
                            Name = "John Doe",
                            Age = 25,
                            Gender = Gender.Male,
                        } 
                    });
                context.Policies.Add(
                    new Policy
                    {
                        PolicyNumber = 123,
                        PolicyTypeDetailId = 123,
                        PolicyHolderId = 123,
                        PolicyHolder = new PolicyHolder
                        {
                            Name = "John Doe",
                            Age = 25,
                            Gender = Gender.Male,
                        }
                    });
                context.SaveChanges();
            }

            using (var context = new PolicyContext(options))
            {
                var controller = new PolicyController(new PolicyService(new PolicyRepository(context), new PolicyMapper()));

                // Act
                var result = controller.Get();

                // Assert
                Assert.IsType<ActionResult<List<PolicyViewModel>>>(result);
            }
        }
    }
}
