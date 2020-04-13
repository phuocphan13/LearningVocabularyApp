using Domain;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Service
{
    public static class ServiceCollectionExtension
    {
        public static void ConfigureService(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureDomain(configuration);
            //services.AddTransient<IPrincipal>(provider =>
            //{
            //    if (provider.GetService<IHttpContextAccessor>().HttpContext != null)
            //        return provider.GetService<IHttpContextAccessor>().HttpContext.User;
            //    return null;
            //});
        }
    }
}
