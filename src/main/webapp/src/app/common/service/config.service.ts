import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = environment.baseUrl + '/config';

  getConfig() {
    return this.http.get<string>(this.configUrl)
      .pipe(
        map((response: string) => {
          return response;
        }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message)
    return throwError("Error getting config")
  }

}
