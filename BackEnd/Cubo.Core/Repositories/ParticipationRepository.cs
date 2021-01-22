using Cubo.Core.Context;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Cubo.Core.Repositories
{
    public class ParticipationRepository : BaseRepository<Participation>, IParticipationRepository
    {
        public ParticipationRepository(CuboDbContext context) : base(context) { }
    }
}