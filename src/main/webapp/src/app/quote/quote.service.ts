import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../common/model/wisdomology';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  url: string = environment.baseUrl + "/quote";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url);
  }

  addQuote(quote: Quote) {
    return this.http.post<Quote>(this.url, quote);
  }

  // TODO don't need?
  get(id: string) {
    return this.http.get<Quote>(`${this.url}/${id}`);
  }

  update(id: string, quote: Quote) {
    return this.http.put<Quote>(`${this.url}/${id}`, quote);
  }

  delete(id: string) {
    return this.http.delete<Quote>(`${this.url}/${id}`);
  }
}
