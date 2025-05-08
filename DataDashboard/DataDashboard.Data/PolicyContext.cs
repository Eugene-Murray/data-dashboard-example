using Microsoft.EntityFrameworkCore;
using DataDashboard.Data.Entities;

namespace DataDashboard.Data
{
    public class PolicyContext : DbContext
    {
        public PolicyContext(DbContextOptions<PolicyContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            #region PolicyHolder
            var policyHolder1 = new PolicyHolder
            {
                Id = 1,
                Name = "Dwayne Johnson",
                Age = 44,
                Gender = Gender.Male
            };

            var policyHolder2 = new PolicyHolder
            {
                Id = 2,
                Name = "John Cena",
                Age = 38,
                Gender = Gender.Male
            };

            var policyHolder3 = new PolicyHolder
            {
                Id = 3,
                Name = "Trish Stratus",
                Age = 42,
                Gender = Gender.Female
            };

            var policyHolder4 = new PolicyHolder
            {
                Id = 4,
                Name = "Stevie Wonder",
                Age = 25,
                Gender = Gender.Male,
            };

            var policyHolder5 = new PolicyHolder
            {
                Id = 5,
                Name = "Aretha Franklin",
                Age = 35,
                Gender = Gender.Female,
            };

            var policyHolder6 = new PolicyHolder
            {
                Id = 6,
                Name = "James Brown",
                Age = 55,
                Gender = Gender.Male,
            };

            var policyHolder7 = new PolicyHolder
            {
                Id = 7,
                Name = "Ray Charles",
                Age = 29,
                Gender = Gender.Male,
            };

            var policyHolder8 = new PolicyHolder
            {
                Id = 8,
                Name = "James Brown",
                Age = 55,
                Gender = Gender.Male,
            };

            var policyHolder9 = new PolicyHolder
            {
                Id = 9,
                Name = "Bob Dylan",
                Age = 21,
                Gender = Gender.Male,
            };

            var policyHolder10 = new PolicyHolder
            {

                Id = 10,
                Name = "Jim Morrison",
                Age = 58,
                Gender = Gender.Male,
            };

            var policyHolder11 = new PolicyHolder
            {
                Id = 11,
                Name = "Janis Joplin",
                Age = 30,
                Gender = Gender.Female,
            };

            modelBuilder.Entity<PolicyHolder>().HasData(
                policyHolder1,
                policyHolder2,
                policyHolder3,
                policyHolder4,
                policyHolder5,
                policyHolder6,
                policyHolder7,
                policyHolder8,
                policyHolder9,
                policyHolder10,
                policyHolder11
            );
            #endregion

            #region PolicyTypeDetails
            var policyTypeDetail1 = new PolicyTypeDetail
            {
                Id = 1,
                PolicyName = "Home and BTL Insurance",
                PolicyDescription = "Home buildings and contents.",
                PolicyType = PolicyType.Home,
            };

            var policyTypeDetail2 = new PolicyTypeDetail
            {
                Id = 2,
                PolicyName = "Life Cover Insurance",
                PolicyDescription = "Personal life cover. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                PolicyType = PolicyType.Life
            };

            var policyTypeDetail3 = new PolicyTypeDetail
            {
                Id = 3,
                PolicyName = "Health Active Insurance",
                PolicyDescription = "Health cover. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                PolicyType = PolicyType.Health
            };

            var policyTypeDetail4 = new PolicyTypeDetail
            {
                Id = 4,
                PolicyName = "Auto Car and Van Insurance",
                PolicyDescription = "Auto cover. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                PolicyType = PolicyType.Auto
            };
            
            modelBuilder.Entity<PolicyTypeDetail>().HasData(
                policyTypeDetail1,
                policyTypeDetail2,
                policyTypeDetail3,
                policyTypeDetail4
            );
            #endregion

            #region Policy
            modelBuilder.Entity<Policy>()
                .HasOne(p => p.PolicyHolder)     // Each Policy has one PolicyHolder
                .WithMany(b => b.Policies)       // Each PolicyHolder can have many Policies
                .HasForeignKey(p => p.PolicyHolderId); // Foreign Key property

            modelBuilder.Entity<Policy>()
                .HasData(
                    new Policy
                    {
                        Id = 1,
                        PolicyNumber = new Random().Next(1, 100000),
                        PolicyTypeDetailId = policyTypeDetail1.Id,
                        PolicyHolderId = policyHolder1.Id,
                    },
                    new Policy
                    {
                        Id = 2,
                        PolicyNumber = new Random().Next(1, 100000),
                        PolicyTypeDetailId = policyTypeDetail2.Id,
                        PolicyHolderId = policyHolder1.Id,
                    },
                new Policy
                {
                    Id = 3,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail1.Id,
                    PolicyHolderId = policyHolder2.Id,
                },
                new Policy
                {
                    Id = 4,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail3.Id,
                    PolicyHolderId = policyHolder2.Id,
                },
                new Policy
                {
                    Id = 5,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail4.Id,
                    PolicyHolderId = policyHolder3.Id,
                },
                new Policy
                {
                    Id = 6,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail1.Id,
                    PolicyHolderId = policyHolder4.Id,
                },
                new Policy
                {
                    Id = 7,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail2.Id,
                    PolicyHolderId = policyHolder4.Id,
                },
                new Policy
                {
                    Id = 8,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail4.Id,
                    PolicyHolderId = policyHolder5.Id,
                },
                new Policy
                {
                    Id = 9,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail3.Id,
                    PolicyHolderId = policyHolder6.Id,
                },
                new Policy
                {
                    Id = 10,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail4.Id,
                    PolicyHolderId = policyHolder7.Id,
                },
                new Policy
                {
                    Id = 11,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail3.Id,
                    PolicyHolderId = policyHolder8.Id,
                },
                new Policy
                {
                    Id = 12,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail4.Id,
                    PolicyHolderId = policyHolder9.Id,
                },
                new Policy
                {
                    Id = 13,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail1.Id,
                    PolicyHolderId = policyHolder10.Id,
                },
                new Policy
                {
                    Id = 14,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail3.Id,
                    PolicyHolderId = policyHolder11.Id,
                },
                new Policy
                {
                    Id = 15,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail2.Id,
                    PolicyHolderId = policyHolder11.Id,
                },
                new Policy
                {
                    Id = 16,
                    PolicyNumber = new Random().Next(1, 100000),
                    PolicyTypeDetailId = policyTypeDetail3.Id,
                    PolicyHolderId = policyHolder11.Id,
                });
            #endregion
        }

        public DbSet<PolicyTypeDetail> PolicyDetails { get; set; }

        public DbSet<PolicyHolder> PolicyHolders { get; set; }

        public DbSet<Policy> Policies { get; set; }

    }
}
