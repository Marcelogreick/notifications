import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able to create a new content', async () => {
    const content = new Content('contentCon');

    expect(content.value).toBeTruthy;
  });

  it('shound not be abe to create notification with less than 3 characters', async () => {
    expect(() => new Content('cot')).toThrow();
  });

  it('shound not be abe to create notification with less than 240 characters', async () => {
    expect(() => new Content('c'.repeat(242))).toThrow();
  });
});
