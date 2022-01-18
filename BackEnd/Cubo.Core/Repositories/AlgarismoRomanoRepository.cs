using Cubo.Core.Context;
using Cubo.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cubo.Core.Repositories
{
    
   public class AlgarismoRomanoRepository : BaseRepository<AlgarismoRomano>
    {
        public AlgarismoRomanoRepository(CuboDbContext context) : base(context) { }
    }
}
