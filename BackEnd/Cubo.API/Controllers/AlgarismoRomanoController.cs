using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Core.Repositories;
using Cubo.Domain.Interfaces;
using Cubo.Domain.Models;

namespace Cubo.API.Controllers
{
    [ApiController]
    public class AlgarismoRomanoController : MainController
    {

        private readonly AlgarismoRomanoRepository _algarismoRomanoRepository ;
        public AlgarismoRomanoController(INotificator notificator,AlgarismoRomanoRepository algarismoRomanoRepository, IUser user) : base(notificator, user)
        {
            _algarismoRomanoRepository = algarismoRomanoRepository; 
        }

      
        [HttpGet]
        public async Task<IEnumerable<AlgarismoRomano>> GetAll()
        {
            return await _algarismoRomanoRepository.GetAll();
        }

               
        [HttpPost]
        public async Task<ActionResult<AlgarismoRomano>> Add(AlgarismoRomano algarismoRomano)
        {

             await _algarismoRomanoRepository.Add(algarismoRomano);

            return algarismoRomano;
          
        }

    }
}
