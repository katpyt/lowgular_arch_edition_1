import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import {NewEmployeeModel} from "../../model/new-employee.model";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCreateComponent {
  readonly newUser: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
    age: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _httpClient: HttpClient, private _employeeService: EmployeeService) {
  }

  onNewUserSubmitted(newUser: NewEmployeeModel): void {
    this._employeeService.create(newUser).subscribe(
      success => {
        alert('New user "'+ newUser.name + '" was successfully created in the database.');
      },
      error => {
        alert('ERROR: User was not created in the database. Please contact the administrator.');
      }
    );
  }
}
