import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let notificationService: any;
  beforeEach(() => {
    notificationService = new NotificationService();
  });

  it('should emit messages that was pushed', () => {
    notificationService.getNotifications().subscribe((notification: any) => {
      expect(notification.message).toEqual('hello world');
    });
    notificationService.message('hello world');
  });
});
