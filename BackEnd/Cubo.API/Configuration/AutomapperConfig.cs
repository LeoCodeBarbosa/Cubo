using AutoMapper;
using Cubo.API.ViewModels;
using Cubo.Domain.Models;

namespace Cubo.API.Configuration
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Participation, ParticipationViewModel>().ReverseMap();
        }
    }
}