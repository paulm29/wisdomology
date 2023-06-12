import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadConfiguration } from './common/store/actions/config.actions';
import { environment } from '../environments/environment';
import { WebSocketSubject } from 'rxjs/internal/observable/dom/WebSocketSubject';
import { webSocket } from 'rxjs/webSocket';
import { catchError, distinctUntilChanged, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = environment.title;

  socket$: WebSocketSubject<any> = webSocket({
    url: environment.websocket,
    openObserver: {
      next: (value) => {
        console.log(value);
        this.socket$.next('Opening socket');
      }
    },
  });

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(loadConfiguration())
    this.socket$.pipe(
      // map((data) => console.log(data)),
      distinctUntilChanged(),
      tap(data => console.log(data)),
      catchError(_ => EMPTY)
    )
  }
}
