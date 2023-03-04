import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [EmployeeCreateComponent],
  providers: [],
  exports: [EmployeeCreateComponent]
})
export class EmployeeCreateComponentModule {
}
