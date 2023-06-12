import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { errorNotification, pushNotification } from '../actions/notification.action';
import { NotificationService } from '../../../../notification/notification.service';
import { Notification } from '../../model/notification.model'

@Injectable()
export class NotificationEffect {
  constructor(private actions$: Actions, private notificationService: NotificationService) {}

  errorNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(errorNotification),
        tap(action => this.notificationService.message(action.error))
      ),
    { dispatch: false }
  );

  pushNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(pushNotification),
        tap(action => this.notificationService.push(new Notification(action.message)))
      ),
    { dispatch: false }
  );
}
