import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryNameModel } from '../models/category-name.model';

@Injectable()
export class CategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  getCategories(): Observable<CategoryNameModel[]> {
    return this._httpClient.get<CategoryNameModel[]>('https://fakestoreapi.com/products/categories');
  }
}
