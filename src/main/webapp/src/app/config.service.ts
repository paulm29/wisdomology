import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'api/hello-world';

  getConfig() {
    return this.http.get<string>(this.configUrl);
  }

}
