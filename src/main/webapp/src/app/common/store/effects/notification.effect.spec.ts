import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { NotificationEffect } from './notification.effect';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { errorNotification, pushNotification } from '../actions/notification.action';
import { NotificationService } from '../../../../notification/notification.service';
import { Notification } from '../../model/notification.model'

describe('Notification Effects', () => {
  const mockNotificationService = new NotificationService();
  let actions$: Observable<Action>;
  let effects: NotificationEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NotificationService, useValue: mockNotificationService },
        provideMockActions(() => actions$),
        NotificationEffect
      ]
    });
    effects = TestBed.get(NotificationEffect);
    actions$ = TestBed.get(Actions);
  });

  describe('ErrorNotification$', () => {
    it('should call NotificationService when receiving an errorNotification action', () => {
      const spyMessage = jest.spyOn(mockNotificationService, 'message').mockImplementationOnce(() => {});
      const message = 'something is wrong';
      const action = errorNotification({ error: message });
      actions$ = of(action);
      effects.errorNotification$.subscribe();

      expect(spyMessage).toHaveBeenCalledWith(message);
    });
  });

  describe('PushNotification$', () => {
    it('should call NotificationService when receiving an pushNotification action', () => {
      const spyPush = jest.spyOn(mockNotificationService, 'push').mockImplementationOnce(() => {});
      const message = 'something is wrong';
      const action = pushNotification({ message });
      actions$ = of(action);
      effects.pushNotification$.subscribe();

      expect(spyPush).toHaveBeenCalledWith(new Notification(message));
    });
  });
});
