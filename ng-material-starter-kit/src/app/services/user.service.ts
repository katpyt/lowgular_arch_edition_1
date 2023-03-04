import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserNewModel} from '../models/user-new.model';
import {UserDetailsModel} from "../models/user-details.model";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  registerNewUser(newUser: { zipcode: any; number: any; password: any; address: { city: any }; phone: any; street: any; name: { firstname: any; lastname: any }; email: any; username: any }): Observable<UserNewModel> {
    return this._httpClient.post<UserNewModel>('https://fakestoreapi.com/users', newUser);
  }

  getUserDetails(id: number): Observable<UserDetailsModel> {
    return this._httpClient.get<UserDetailsModel>('https://fakestoreapi.com/users/'+id);
  }
}
