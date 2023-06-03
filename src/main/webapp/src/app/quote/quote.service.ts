import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../common/model/wisdomology';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  url: string = "/quote";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url);
  }

  // TODO don't need?
  get(id: string) {
    return this.http.get<Quote>(`this.url/${id}`);
  }

  update(id: string, quote: Quote) {
    return this.http.put<Quote>(`this.url/${id}`, quote);
  }

  delete(id: string) {
    return this.http.delete<Quote>(`this.url/${id}`);
  }
}
