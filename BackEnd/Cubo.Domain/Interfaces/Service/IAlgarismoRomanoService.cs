using Cubo.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cubo.Domain.Interfaces.Service
{
   public interface IAlgarismoRomanoService : IDisposable
    {
        Task<bool> Add(AlgarismoRomano algarismoRomano);

        Task<bool> Remove(Guid id);

        Task<bool> Update(AlgarismoRomano algarismoRomano);
    }
}
