import { Injectable } from '@angular/core';
import { concat, from, interval, of, Subject, zip } from 'rxjs';
import { bufferTime, filter, flatMap, map } from 'rxjs/operators';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications = new Subject<Notification>();

  constructor() {}

  message(notification: string) {
    this.push(new Notification(notification));
  }

  push(notification: Notification) {
    this._notifications.next(notification);
  }

  getNotifications() {
    return this._notifications.pipe(
      bufferTime(500),
      filter(msgs => msgs.length !== 0),
      flatMap(msgs => {
        const clock$ = concat(of(0), interval(5000));
        return zip(from(msgs), clock$);
      }),
      map(value => value[0])
    );
  }
}
