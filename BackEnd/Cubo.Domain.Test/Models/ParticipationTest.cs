using Cubo.Domain.Models;
using System;
using Xunit;

namespace Cubo.Domain.Models.Test
{
    public class ParticipationTest
    {
        [Fact(DisplayName = "New Participation Valid")]
        [Trait("Category", "Participation Tests")]
        public void Participation_NewParticipation_ShoulBeValid()
        {
            // Arrange
            var participation = new Participation(Guid.NewGuid(), "Leonardo", "Costa", 50);

            // Act
            var result = participation.IsValid();

            // Assert 
            Assert.True(result);
            Assert.Equal(0, participation.ValidationResult.Errors.Count);
        }

        [Fact(DisplayName = "New Participation Invalid")]
        [Trait("Category", "Participation Tests")]
        public void Participation_NewParticipation_ShouldBeInvalid()
        {
            // Arrange
            var participation = new Participation(Guid.NewGuid(), "L", "P", 0);

            // Act
            var result = participation.IsValid();

            // Assert 
            Assert.False(result);
            Assert.NotEqual(0, participation.ValidationResult.Errors.Count);
        }
    }
}