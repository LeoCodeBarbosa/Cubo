using FluentValidation;

namespace Cubo.Domain.Models.Validations
{
    public class ParticipationValidation : AbstractValidator<Participation>
    {
        public ParticipationValidation()
        {
            RuleFor(c => c.FirstName)
                .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
                .Length(2, 200).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.LastName)
                .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
                .Length(2, 200).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.Value)
                .GreaterThan(0).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");
        }
    }
} 