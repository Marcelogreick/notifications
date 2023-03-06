// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { isNotEmpty, isUUID, length } from 'class-validator';

export class CreateNotificationBody {
  @isNotEmpty()
  @isUUID()
  content: string;

  @isNotEmpty()
  @length(5, 240)
  category: string;

  @isNotEmpty()
  recipientId: string;
}
