
using Microsoft.EntityFrameworkCore;
using DataDashboard.Services.Mappers;
using DataDashboard.Data;
using DataDashboard.Data.Repositories;
using DataDashboard.Services;

namespace WTW.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<PolicyContext>(op => op.UseInMemoryDatabase("Policy"));
            builder.Services.AddScoped<IPolicyHolderRepository, PolicyHolderRepository>();
            builder.Services.AddScoped<IPolicyHolderMapper, PolicyHolderMapper>();
            builder.Services.AddScoped<IPolicyHolderService, PolicyHolderService>();

            builder.Services.AddScoped<IPolicyTypeDetailRepository, PolicyTypeDetailRepository>();
            builder.Services.AddScoped<IPolicyTypeDetailMapper, PolicyTypeDetailMapper>();
            builder.Services.AddScoped<IPolicyTypeDetailService, PolicyTypeDetailService>();

            builder.Services.AddScoped<IPolicyRepository, PolicyRepository>();
            builder.Services.AddScoped<IPolicyMapper, PolicyMapper>();
            builder.Services.AddScoped<IPolicyService, PolicyService>();

            // Add CORS policy
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            // Create database so the data seeds
            using (var serviceScope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                using var context = serviceScope.ServiceProvider.GetRequiredService<PolicyContext>();
                context.Database.EnsureCreated();
            }

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.UseCors("AllowAll");

            app.Run();
        }
    }
}
