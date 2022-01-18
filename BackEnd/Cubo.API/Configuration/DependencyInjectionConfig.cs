using Cubo.API.Extension;
using Cubo.Core.Context;
using Cubo.Core.Repositories;
using Cubo.Domain.Interfaces;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Domain.Interfaces.Service;
using Cubo.Domain.Notifications;
using Cubo.Domain.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Cubo.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
           
            services.AddScoped<CuboDbContext>();
            services.AddScoped<IParticipationRepository, ParticipationRepository>();
            services.AddScoped<IAlgoritimoRepository ,AlgarismoRomanoRepository>();
            services.AddScoped<INotificator, Notificator>();
            services.AddScoped<IParticipationService, ParticipationService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IUser, AspNetUser>();

            //API Documentation
            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

            return services;
        }
    }
}