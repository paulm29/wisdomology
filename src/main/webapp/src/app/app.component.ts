import { Component, OnInit } from '@angular/core';
import { ConfigService } from './common/service/config.service';
import { Store } from '@ngrx/store';
import { loadConfiguration } from './common/store/actions/config.actions';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = environment.title;

  constructor(private store: Store, private configService: ConfigService) {}

  ngOnInit() {
    this.store.dispatch(loadConfiguration())
    this.showConfig()
  }

  // TODO replace with selector
  showConfig() {
    this.configService.getConfig()
      .subscribe((message: string) => {
          console.log(message)
      });
  }
}
