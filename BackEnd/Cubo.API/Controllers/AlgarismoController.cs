using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using Cubo.API.Extension;
using Cubo.API.ViewModels;
using Cubo.Domain.Interfaces;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Domain.Interfaces.Service;
using Cubo.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cubo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlgarismoController : MainController
    {
        private readonly IAlgarismoRomanoRepository _algarismoRomanoRepository ;
        private readonly IAlgarismoRomanoService _algarismoRomanoService;
        private readonly IMapper _mapper;

        public AlgarismoController(INotificator notificator,
                                  IAlgarismoRomanoRepository algarismoRomanoRepository,
                                  IAlgarismoRomanoService participationService,
                                  IMapper mapper,
                                  IUser user) : base(notificator, user)
        {
            _algarismoRomanoRepository = algarismoRomanoRepository;
            _algarismoRomanoService = participationService;
            _mapper = mapper;
        }

        
        [HttpGet]
        public async Task<IEnumerable<AlgarismoRomanoViewModel>> GetAll()
        {
            return _mapper.Map<IEnumerable<AlgarismoRomanoViewModel>>(await _algarismoRomanoRepository.GetAll());
        }

       

        
        [HttpPost]
        public async Task<ActionResult<AlgarismoRomanoViewModel>> Add(AlgarismoRomanoViewModel algarismoRomanoViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _algarismoRomanoService.Add(_mapper.Map<AlgarismoRomano>(algarismoRomanoViewModel));

            return CustomResponse(algarismoRomanoViewModel);
        }
        
    }
}