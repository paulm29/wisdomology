import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category, CategoryReference } from '../common/model/wisdomology';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = environment.baseUrl + "/reference/category";

  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoryReference[]> {
    return this.http.get<CategoryReference[]>(this.url);
  }

  add(category: CategoryReference) {
    return this.http.post<CategoryReference>(this.url, category);
  }

  // TODO don't need?
  get(id: string) {
    return this.http.get<CategoryReference>(`${this.url}/${id}`);
  }

  update(id: string, category: CategoryReference) {
    return this.http.put<CategoryReference>(`${this.url}/${id}`, category);
  }

  delete(id: string) {
    return this.http.delete<CategoryReference>(`${this.url}/${id}`);
  }
}
