using DataDashboard.Data.Entities;
using DataDashboard.Data.ViewModels;
using DataDashboard.Services.Mappers;

namespace DataDashboard.Tests.Mappers
{
    public class PolicyMapperUnitTest
    {
        [Fact]
        public void Should_Map_PolicyViewModel_To_Policy()
        {
            // Arrange
            var mapper = new PolicyMapper();
            var policyViewModel = new PolicyViewModel
            {
                Id = 1,
                PolicyNumber = 123,
                PolicyTypeDetailId = 123,
                PolicyHolder = new PolicyHolderViewModel
                {
                    Id = 1,
                    Name = "John Doe",
                    Age = 25,
                    Gender = Gender.Male,
                }
            };

            // Act
            var result = mapper.Map(policyViewModel);

            // Assert
            Assert.Equal(result.GetType(), typeof(Policy));
        }
    }
}
