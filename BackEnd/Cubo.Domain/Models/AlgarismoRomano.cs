

using System;

namespace Cubo.Domain.Models
{
    public class AlgarismoRomano : BaseEntity
    {
        public int Value_int { get; set; }
        public string Value_romano { get; set; }


        public AlgarismoRomano() { }
        public AlgarismoRomano(Guid id , int value_int, string value_romano)
        {
            Id = id;
            Value_int = value_int;
            Value_romano = value_romano;
        }

    }
}
