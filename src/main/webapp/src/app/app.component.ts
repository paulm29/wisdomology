import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.showConfig()
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((message: string) => {
          console.log(message)
      });
  }
}
