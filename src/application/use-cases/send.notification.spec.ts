import { SendNotification } from './send.notification';

describe('Send notification', () => {
  it('shoud be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const response = await sendNotification.execute({
      recipientId: 'recipientId',
      content: 'contentCon',
      category: 'category',
    });

    expect(response.notification).toBeTruthy;
  });
});
