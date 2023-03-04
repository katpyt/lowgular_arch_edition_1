import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartDetailsModel} from "../models/cart-details.model";

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

  getCart(id: number): Observable<CartDetailsModel> {
    return this._httpClient.get<CartDetailsModel>('https://fakestoreapi.com/carts/'+id);
  }

}
