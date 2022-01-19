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
    class AlgarismoRomanoService : BaseService, IAlgarismoRomanoService
    {
        private readonly IAlgarismoRomanoRepository _algarismoRomanoRepository;
        public AlgarismoRomanoService(IAlgarismoRomanoRepository romanoRepository,
            INotificator notificator): base(notificator)
        {
            _algarismoRomanoRepository = romanoRepository;
        }
        public async Task<bool> Add(AlgarismoRomano algarismoRomano)
        {
            if (!ExecuteValidation(new AlgarismoRomanoValidation(), algarismoRomano)) return false;
            if (_algarismoRomanoRepository.Search(f => f.Value_int == algarismoRomano.Value_int && f.Value_romano == algarismoRomano.Value_romano).Result.Any())
            {
                Notificate("Esse número já existe");
                return false;
            }
            await _algarismoRomanoRepository.Add(algarismoRomano);
            return true;

        }

        public void Dispose()
        {
            _algarismoRomanoRepository?.Dispose();
        }

        public async Task<bool> Remove(Guid id)
        {

            await _algarismoRomanoRepository.Remove(id);
            return true;
        }

        public async Task<bool> Update(AlgarismoRomano algarismoRomano)
        {
            if (!ExecuteValidation(new AlgarismoRomanoValidation(), algarismoRomano)) return false;
            await _algarismoRomanoRepository.Update(algarismoRomano);
            return true;
        }
    }
}
