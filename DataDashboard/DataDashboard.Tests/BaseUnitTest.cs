using DataDashboard.Data;
using Microsoft.EntityFrameworkCore;

namespace DataDashboard.Tests
{
    public class BaseUnitTest
    {
        public DbContextOptions<PolicyContext> GetInMemoryDbContextOptions()
        {
            var options = new DbContextOptionsBuilder<PolicyContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;
            return options;
        }
    }
}