using Core.Repositories;
using Core.UoW;
using Domain.Repositories;
using Domain.UoW;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Domain
{
    public static class ServiceCollectionExtension
    {
        public static void ConfigureDomain(this IServiceCollection services, IConfiguration configuration)
        {
            //services.AddDbContext<MotoManagementContext>(options =>
            //    options.UseSqlServer(configuration.GetConnectionString("MotoManagement")));

            //services.AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
