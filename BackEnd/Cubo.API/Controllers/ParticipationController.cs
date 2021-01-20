using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cubo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParticipationController : ControllerBase
    {
        private static readonly List<Participation> participationList = new List<Participation>()
        {
            new Participation()
            {
                Id = 1.ToString(),
                FirstName = "Leonardo",
                LastName = "Costa",
                Value = 55
            },
            new Participation()
            {
                Id = 2.ToString(),
                FirstName = "Jack",
                LastName = "Costa",
                Value = 55
            }
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(participationList);
        }
    }
}
