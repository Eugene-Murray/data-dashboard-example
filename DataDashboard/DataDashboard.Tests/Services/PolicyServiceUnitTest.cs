using DataDashboard.Data.Entities;
using DataDashboard.Data.Repositories;
using DataDashboard.Services;
using DataDashboard.Services.Mappers;

namespace DataDashboard.Tests.Services
{
    public class MockPolicyRepository : IPolicyRepository
    {
        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }
        public void Edit(int id, Policy policy)
        {
            throw new System.NotImplementedException();
        }
        public Policy Get(int id)
        {
            if (id == 1)
            {
                return new Policy { 
                    Id = 1, 
                    PolicyNumber = 123456789, 
                    PolicyHolder = new PolicyHolder
                    {
                        Id = 1,
                        Name = "John Doe",
                        Age = 25,
                        Gender = Gender.Male
                    }
                };
            }
            return null;
        }
        public List<Policy> Get()
        {
            return new List<Policy> {
                new Policy {
                    Id = 1,
                    PolicyNumber = 123456789,
                    PolicyHolder = new PolicyHolder
                    {
                        Id = 1,
                        Name = "John Doe",
                        Age = 25,
                        Gender = Gender.Male
                    }
                },
                new Policy {
                    Id = 2,
                    PolicyNumber = 987654321,
                    PolicyHolder = new PolicyHolder
                    {
                        Id = 1,
                        Name = "Jane Doe",
                        Age = 35,
                        Gender = Gender.Female
                    }
                }
            };
        }
        public Policy Create(Policy Policy)
        {
            throw new System.NotImplementedException();
        }
    }

    public class PolicyServiceUnitTest
    {
        [Fact]
        public void Should_GetList()
        {
            // Arrange
            var service = new PolicyService(new MockPolicyRepository(), new PolicyMapper());

            // Act
            var result = service.Get();

            // Assert
            Assert.Equal(result?.Count, 2);
        }

        [Fact]
        public void Should_Get_Policy()
        {
            // Arrange
            var service = new PolicyService(new MockPolicyRepository(), new PolicyMapper());
            var id = 1;

            // Act
            var result = service.Get(id);

            // Assert
            Assert.Equal(1, result?.Id);
            Assert.Equal(123456789, result?.PolicyNumber);
        }


        [Fact]
        public void Should_Not_Get_Policy()
        {
            // Arrange
            var service = new PolicyService(new MockPolicyRepository(), new PolicyMapper());
            var id = 2;

            // Act
            var result = service.Get(id);

            // Assert
            Assert.Equal(null, result);
        }
    }
}
