import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BreedsListModel} from "../models/breeds-list.model";
import {Observable} from "rxjs";

@Injectable()
export class DogBreedsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<BreedsListModel[]> {
    return this._httpClient.get<BreedsListModel[]>('https://dog.ceo/api/breeds/list/all');
  }
}
