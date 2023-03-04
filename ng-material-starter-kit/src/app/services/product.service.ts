import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';
import { CategoryNameModel } from '../models/category-name.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }

  getCategoryList() {
    return this._httpClient.get<CategoryNameModel[]>('https://fakestoreapi.com/products/categories').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error'))
    );
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>('https://fakestoreapi.com/products/'+id);
  }
}
