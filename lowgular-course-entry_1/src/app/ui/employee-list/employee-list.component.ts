import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.remove(id).subscribe(
      success => {
        alert('User with id: ' + id + ' was successfully deleted from the database.');
      },
      error => {
        alert('ERROR: User was not deleted from the database. Please contact the administrator.');
      }
      );
  }

  getOne(id: string) {
    this._employeeService.getOne(id).subscribe();
  }
}
