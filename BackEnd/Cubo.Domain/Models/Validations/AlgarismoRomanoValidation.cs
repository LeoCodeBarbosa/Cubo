﻿using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cubo.Domain.Models.Validations
{
    class AlgarismoRomanoValidation : AbstractValidator<AlgarismoRomano>
    {
        public AlgarismoRomanoValidation()
        {
            

            RuleFor(c => c.Value_romano)
                .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
                .Length(2, 20).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.Value_int)
                .GreaterThan(0).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");
        }
    }
}