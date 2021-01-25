using System;
using FluentValidation.Results;

namespace Cubo.Domain.Models
{
    public abstract class BaseEntity
    {
        protected BaseEntity()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

        public ValidationResult ValidationResult { get; protected set; }

        public virtual bool IsValid()
        {
            throw new NotImplementedException();
        }
    }
}