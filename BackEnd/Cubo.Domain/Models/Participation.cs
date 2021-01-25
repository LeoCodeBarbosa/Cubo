
using Cubo.Domain.Models.Validations;
using System;

namespace Cubo.Domain.Models
{
    public class Participation : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public float Value { get; set; }

        public override bool IsValid()
        {
            ValidationResult = new ParticipationValidation().Validate(this);
            return ValidationResult.IsValid;
        }

        public Participation() { }

        public Participation(Guid id, string firstName, string lastName, float value)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Value = value;
        }
    }
}
