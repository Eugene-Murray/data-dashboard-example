

using DataDashboard.Data;
using DataDashboard.Data.Entities;
using DataDashboard.Data.Repositories;

namespace DataDashboard.Tests.Repos
{
    public class PolicyRepoUnitTest : BaseUnitTest
    {
        [Fact]
        public void Should_CreatePolicy_Entity_List()
        {
            // Arrange
            var options = base.GetInMemoryDbContextOptions();
            var repo = new PolicyRepository(new PolicyContext(options));

            // Act
            var result = repo.Create(
                    new Policy
                    {
                        PolicyNumber = 12399999,
                        PolicyTypeDetailId = 123,
                        PolicyHolderId = 123,
                        PolicyHolder = new PolicyHolder
                        {
                            Name = "John Doe",
                            Age = 25,
                            Gender = Gender.Male,
                        }
                    });

            // Assert
            Assert.Equal(result.PolicyTypeDetailId, 123);
        }
    }
}
