import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      this.apiUrl, category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.apiUrl}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.apiUrl}/${id}`);
  }
}
