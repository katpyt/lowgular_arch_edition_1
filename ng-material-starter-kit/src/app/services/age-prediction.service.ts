import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AgePredictionModel } from '../models/age-prediction.model';

@Injectable()
export class AgePredictionService {
  constructor(private _httpClient: HttpClient) {
  }

  predictAge(name: string): Observable<AgePredictionModel> {
    return this._httpClient.get<AgePredictionModel>('https://api.agify.io/?name='+name);
  }
  // predictAge(name: string): Observable<AgePredictionModel> {
  //   return this._httpClient.get<ApiResponse<AgePredictionResponse>>('https://api.agify.io/?name=${name}').pipe(
  //     map((response: ApiResponse<AgePredictionResponse>): AgePredictionModel => {
  //       return {
  //         predictedAge: response.data.age
  //       }
  //     })
  //   );
  // }
}
