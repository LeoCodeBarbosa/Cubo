using Cubo.Domain.Interfaces;
using Cubo.Domain.Interfaces.Repository;
using Cubo.Domain.Interfaces.Service;
using Cubo.Domain.Models;
using Cubo.Domain.Notifications;
using Cubo.Domain.Services;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Cubo.Domain.Test.Services
{
    public class ParticipationServiceTest
    {
        private Participation participationValid;
        private Participation participationInvalid;

        public ParticipationServiceTest()
        {
            participationValid = new Participation(Guid.NewGuid(), "Leonardo", "Costa", 65);
            participationInvalid = new Participation(Guid.NewGuid(), "", "", 0);
        }

        [Fact(DisplayName = "New Participation Success")]
        [Trait("Category", "Participation Service Tests")]
        public async Task ParticipationService_Add_ShouldExecuteWithSuccess()
        {
            // Arrange
            var participation = participationValid;
            var participationRepo = new Mock<IParticipationRepository>();
            var notificationRepo = new Mock<INotificator>();
            var participationService = new ParticipationService(participationRepo.Object, notificationRepo.Object);

            // Act
            await participationService.Add(participation);

            // Assert
            Assert.True(participation.IsValid());
            participationRepo.Verify(r => r.Add(participation), Times.Once);
        }

        [Fact(DisplayName = "New Participation Fail")]
        [Trait("Category", "Participation Service Tests")]
        public async Task ParticipationService_Add_ShouldExecuteWithFailAsync()
        {
            // Arrange
            var participation = participationInvalid;
            var participationRepo = new Mock<IParticipationRepository>();
            var notificationRepo = new Mock<INotificator>();
            var participationService = new ParticipationService(participationRepo.Object, notificationRepo.Object);

            // Act
            await participationService.Add(participation);

            // Assert
            Assert.False(participation.IsValid());
            participationRepo.Verify(r => r.Add(participation), Times.Never);
            notificationRepo.Verify(r => r.Handle(It.IsAny<Notification>()), Times.AtLeastOnce);
        }
    }
}
