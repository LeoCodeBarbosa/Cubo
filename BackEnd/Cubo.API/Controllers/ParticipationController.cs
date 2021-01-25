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
    public class ParticipationController : MainController
    {
        private readonly IParticipationRepository _participationRepository;
        private readonly IParticipationService _participationService;
        private readonly IMapper _mapper;

        public ParticipationController(INotificator notificator,
                                  IParticipationRepository participationRepository,
                                  IParticipationService participationService,
                                  IMapper mapper,
                                  IUser user) : base(notificator, user)
        {
            _participationRepository = participationRepository;
            _participationService = participationService;
            _mapper = mapper;
        }

        //[Authorize]
        [HttpGet]
        public async Task<IEnumerable<ParticipationViewModel>> GetAll()
        {
            return _mapper.Map<IEnumerable<ParticipationViewModel>>(await _participationRepository.GetAll());
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<ParticipationViewModel>> GetAllAuthorize()
        {
            return _mapper.Map<IEnumerable<ParticipationViewModel>>(await _participationRepository.GetAll());
        }

        //[Authorize]
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<ParticipationViewModel>> GetById(Guid id)
        {
            var participationViewModel = await GetParticipation(id);

            if (participationViewModel == null) return NotFound();

            return participationViewModel;
        }

        //[Authorize]
        [HttpPost]
        public async Task<ActionResult<ParticipationViewModel>> Add(ParticipationViewModel participationViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _participationService.Add(_mapper.Map<Participation>(participationViewModel));

            return CustomResponse(participationViewModel);
        }

        //[Authorize]
        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, ParticipationViewModel participationViewModel)
        {
            var participationAtualizacao = await GetParticipation(id);
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            participationAtualizacao.FirstName = participationViewModel.FirstName;
            participationAtualizacao.LastName = participationViewModel.LastName;
            participationAtualizacao.Value = participationViewModel.Value;

            await _participationService.Update(_mapper.Map<Participation>(participationAtualizacao));

            return CustomResponse(participationViewModel);
        }

        //[Authorize]
        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<ParticipationViewModel>> Remove(Guid id)
        {
            var participation = await GetParticipation(id);

            if (participation == null) return NotFound();

            await _participationService.Remove(id);

            return CustomResponse(participation);
        }

        private async Task<ParticipationViewModel> GetParticipation(Guid id)
        {
            return _mapper.Map<ParticipationViewModel>(await _participationRepository.GetByIdAsNoTracking(id));
        }
    }
}