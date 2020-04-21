using Core.Repositories;
using Core.UoW;
using Domain.Models;
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
            services.AddDbContext<LearningVocabularyContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("LearningVocabulary")));

            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IRepository<Account>, Repository<Account>>();
            services.AddScoped<IRepository<Day>, Repository<Day>>();
            services.AddScoped<IRepository<DayTracking>, Repository<DayTracking>>();
            services.AddScoped<IRepository<Level>, Repository<Level>>();
            services.AddScoped<IRepository<Vocabulary>, Repository<Vocabulary>>();
            services.AddScoped<IRepository<VocabularyTracking>, Repository<VocabularyTracking>>();
        }
    }
}
