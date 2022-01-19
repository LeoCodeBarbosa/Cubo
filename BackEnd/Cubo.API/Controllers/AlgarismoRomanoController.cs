using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Core.Repositories;
using Cubo.Domain.Interfaces;
using Cubo.Domain.Models;
using Cubo.Domain.Interfaces.Service;
using AutoMapper;
using Cubo.API.ViewModels;

namespace Cubo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlgarismoRomanoController : MainController
    {

        private readonly AlgarismoRomanoRepository _algarismoRomanoRepository ;
        
        private readonly IAlgarismoRomanoService _algarismoRomanoService;
        private readonly IMapper _mapper;

        public AlgarismoRomanoController(IAlgarismoRomanoService algarismoRomanoService,
                                             INotificator notificator, 
                                             AlgarismoRomanoRepository algarismoRomanoRepository,
                                             IMapper mapper, IUser user) : base(notificator, user)
        {
            _algarismoRomanoRepository = algarismoRomanoRepository;
            _algarismoRomanoService = algarismoRomanoService;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IEnumerable<AlgarismoRomanoViewModel>> GetAll()
        {
            return _mapper.Map<IEnumerable<AlgarismoRomanoViewModel>>(await _algarismoRomanoRepository.GetAll());

        }
        [HttpPost]
        public async Task<ActionResult<AlgarismoRomanoViewModel>> Add(AlgarismoRomanoViewModel algarismoRomanoView)
        {

             await _algarismoRomanoRepository.Add(_mapper.Map<AlgarismoRomano>(algarismoRomanoView));

            return CustomResponse(algarismoRomanoView);
          
        }

    }
}
