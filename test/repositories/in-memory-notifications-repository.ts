import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-respository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string) {
    return (
      this.notifications.find(
        (notification) => notification.id === notificationId,
      ) ?? null
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((item) => item.recipientId === recipientId)
      .length;
  }

  async save(notification: Notification) {
    const notificationIndex = this.notifications.findIndex(
      (notification) => notification.id === notification.id,
    );

    if (notificationIndex === -1) {
      throw new Error('Notification not found');
    }

    this.notifications[notificationIndex] = notification;
  }
}
