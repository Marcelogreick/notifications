import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('shoud be able to create a new notification', async () => {
    const notification = new Notification({
      content: new Content('contentCon'),
      category: 'category',
      recipientId: 'recipientId',
    });

    expect(notification).toBeTruthy;
  });
});
