using Cubo.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Cubo.Domain.Interfaces.Service
{
    public interface IParticipationService : IDisposable
    {
        Task<bool> Add(Participation participation);

        Task<bool> Remove(Guid id);

        Task<bool> Update(Participation participation);
    }
}
