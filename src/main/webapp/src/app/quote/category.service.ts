import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../common/model/wisdomology';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = environment.baseUrl + "/quote";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  add(category: Category) {
    return this.http.post<Category>(`this.url`, category);
  }

  // TODO don't need?
  get(id: string) {
    return this.http.get<Category>(`this.url/${id}`);
  }

  update(id: string, category: Category) {
    return this.http.put<Category>(`this.url/${id}`, category);
  }

  delete(id: string) {
    return this.http.delete<Category>(`this.url/${id}`);
  }
}
