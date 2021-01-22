using Cubo.Domain.Notifications;
using System.Collections.Generic;

namespace Cubo.Domain.Interfaces
{
    public interface INotificator
    {
        bool HasNotification();
        List<Notification> GetAllNotifications();
        void Handle(Notification notification);
    }
}
