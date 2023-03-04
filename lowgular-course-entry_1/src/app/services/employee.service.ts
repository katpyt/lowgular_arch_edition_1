import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {EmployeeModel} from "../model/employee.model";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";
import {NewEmployeeModel} from "../model/new-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): EmployeeModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            id: employeeResponse.id,
            name: employeeResponse.employee_name,
            surname: '',
            email: '',
            age: employeeResponse.employee_age,
            salary: employeeResponse.employee_salary,
            image: employeeResponse.profile_image
          }
        });
      }));
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+ id).pipe(
      map((response: ApiResponse<EmployeeResponse>): EmployeeModel => {
          return {
            id: response.data.id,
            name: response.data.employee_name,
            surname: '',
            email: '',
            age: response.data.employee_age,
            salary: response.data.employee_salary,
            image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
      })
    );
  }

  create(employee: NewEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  remove(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/'+ id)
      .pipe(map(_ => void 0)
    );
  }
}
