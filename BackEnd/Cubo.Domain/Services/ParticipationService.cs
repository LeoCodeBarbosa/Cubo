using Cubo.Domain.Interfaces;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Domain.Interfaces.Service;
using Cubo.Domain.Models;
using Cubo.Domain.Models.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cubo.Domain.Services
{
    public class ParticipationService : BaseService, IParticipationService
    {
        private readonly IParticipationRepository _participationRepository;

        public ParticipationService(IParticipationRepository participationRepository,
                                 INotificator notificator) : base(notificator)
        {
            _participationRepository = participationRepository;
        }

        public async Task<bool> Add(Participation participation)
        {
            if (!ExecuteValidation(new ParticipationValidation(), participation)) return false;

            if (_participationRepository.Search(f => f.FirstName == participation.FirstName && f.LastName == participation.LastName).Result.Any())
            {
                Notificate("Já existe um participante com esse nome");
                return false;
            }

            await _participationRepository.Add(participation);
            return true;
        }

        public async Task<bool> Update(Participation participation)
        {
            if (!ExecuteValidation(new ParticipationValidation(), participation)) return false;
            await _participationRepository.Update(participation);
            return true;
        }

        public async Task<bool> Remove(Guid id)
        {
            await _participationRepository.Remove(id);
            return true;
        }

        public void Dispose()
        {
            _participationRepository?.Dispose();
        }
    }
}